var WebSocketServer = require('websocket').server;
const e = require('express');
var http = require('http');

var server = http.createServer(function(request, response) {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
});
server.listen(1337, function() { });

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);
  var client = connection

  //handle user message
  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      // process WebSocket message
      console.log("Message:" + message.utf8Data)
      const obj = JSON.parse(message.utf8Data)

      var returnData = ""
      var returnType = "message"
      //time to process message 
      //first we split by space
      var command = obj["command"].slice(0, -1).split(" ")
      var curr_dir = obj["curr_dir"]
      console.log("what is command:")
      console.log(command)
      if(command.length == 1){
        if(command == "pwd"){
          returnData = curr_dir
        } else if(command == "ls"){
          var parseDir = curr_dir.split("/")
          if(parseDir.length == 2){
            returnData = "directory1\tdirectory2\ttextfile.txt"
          } else{
            returnData = "Nothing in this directory yet!"
          }
        } else{
          returnData = "Whoops! That command is not yet supported, or does not exist!"
        }
      } else if(command.length == 2){
        if(command[0] == "echo"){
          returnData = command[1]
        } else if(command[0] == "cd"){
          returnType = "cd"
          var parseDir = curr_dir.split("/")
          console.log(parseDir)
          if(parseDir.length == 2){
            if(command[1] == ".."){
              returnData = "Uh oh! You're already at home! Can't go back anymore..."
            } else if (command[1] == "directory1" || command[1] == "directory2"){
              returnData = curr_dir + "/" + command[1]
            } else{
              returnData = "Oops! You can only use cd (change directory) to existing directory!"
            }
          } else if(parseDir.length > 2){
            if(command[1] == ".."){
              var removed = parseDir.pop()
              console.log(parseDir)
              returnData = parseDir.join("/")
            } 
          } else{
            returnData = curr_dir + "/" + command[1]
          }
        } else if(command [0] == "cat"){
          if(command[1] == "textfile.txt"){
            returnData = "Hello World!\n\rWelcome to this mini bash lesson. Hope you enjoy your stay :)"
          } else{
            returnData = "Nope! You can only use cat on existing files, such as .txt file"
          }
        } else{
          returnData = "Whoops! That command is not yet supported, or does not exist!"
        }
      } else{
        returnData = "Whoops! That command is not yet supported, or does not exist!"
      }


        var json = JSON.stringify({ type:returnType, data: returnData });
        client.sendUTF(json);
    }
  });

  connection.on('close', function(connection) {
    // close user connection
  });
});
