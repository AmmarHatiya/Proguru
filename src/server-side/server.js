const { request } = require('express');
const { response } = require('express');
const express = require('express');
const cors = require('cors')
const port = 3000;
const db = require('./mongoose.js');

let app = express();

app.use(express.static("public"));
app.use(cors());

app.get('/', function(request, response){
    // response.send("<html> <title> Welcome</title> <body>Welcome to our page! </body></html>");
    // let username = "uwu";
    // let password = "uwu";
    // let email = "uwu";
    // let hashPassword = "nuwu";
    // let userData = {
    //     username: username,
    //     password: password,
    //     hashPassword: hashPassword,
    //     email: email
    // }
    // let newUser = new db.User(userData);
    // newUser.save( function(error){
    //     if(error){
    //         console.error('Unable to add student: ', error);
    //     } else{
    //         console.log('New student was added successfully');
    //     }
    // });
    db.User.find({username: "uwu"}).then( r => {
            console.log("Result:", r);
            response.send(r);
        }
    );
});

app.set('port', port);
app.listen(app.get('port'),function(){
    console.log(`Listening on port ${app.get('port')}`);
});
