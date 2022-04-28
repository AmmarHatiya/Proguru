<template>
    <!-- goal: run a shell script with a press of a button -->
    <div>
        <p> Welcome! This is a mini terminal for you to play around with Bash. 
            Click the button to get started </p>
        <button v-if="!clicked" class="btn btn-primary" @click="init"> Start Terminal </button>
        <div id="terminal"></div>

        <p> Some things to try! </p>
        <ul>
            <li> <b>pwd</b> : check the current path</li>
            <li><b>ls</b> : list the files and directories in the current path</li>
            <li><b>echo</b> <i>your_text</i>: bash will repeat the text you gave it</li>
            <li><b>cd</b> <i>any_directory</i>: change path to a new directory. Afterwards, try <b>cd</b> .. and see what happens!</li>
            <li><b>cat</b> <i>a_text_file</i>: read the contents of a text file</li>
        </ul>

    </div>


</template>

<script>

import { Terminal } from 'xterm';
import "../../node_modules/xterm/css/xterm.css";
import "../../node_modules/xterm/lib/xterm.js"


    export default {
        name:'BashView',
        data() {
            return { 
                clicked: false,
            };
        },
        methods:{
            init(){
                console.log("???")
                this.clicked = true;
                var term = new Terminal({
                    cursorBlink: "block"
                });
                var connection = new WebSocket('ws://127.0.0.1:1337');

                connection.onopen = function () {
                    console.log("It's connected!")
                    // connection is opened and ready to use
                };

                connection.onerror = function (error) {
                    console.log("Nope f this")
                    // an error occurred when sending/receiving data
                };
                var curline = ""
                var entries = []
                var curdir = "/home"
                term.open(document.getElementById('terminal'));
                term.write('\x1B[1;3;31mHello Terminal!\x1B[0m:/home $ ')
                term.prompt = () => {
                    if (curline) {
                        let data = { method: "command", command: curline, curr_dir: curdir };
                        connection.send(JSON.stringify(data));
                    }
                    return "hi"
                };
                term.prompt();

                // Receive data from socket
                connection.onmessage = msg => {
                    var returnMsg = JSON.parse(msg.data)
                    if(returnMsg.type == "cd"){
                        curdir = returnMsg.data
                        // term.write("\r\n")
                    } else{
                        term.write(JSON.parse(msg.data).data);
                    }
                    curline = "";
                };
                term.onKey(e => {
                    var code = e.key.charCodeAt(0);
                    if (code == 127){
                        //special handling for backspace
                        curline = curline.slice(0,-1); 
                        term.write("\b \b");
                    } else {
                        curline += e.key; 
                    }
                    term.write(e.key);
                    console.log(e.key)
                    if (e.key == '\r'){
                        term.write('\n');
                    }
                    if (code === 13) {
                        if (curline) {
                            entries.push(curline);
                            // term.write("\r\n");
                            var test = new Promise((resolve, reject) => {
                                console.log('Initial');
                                term.prompt()

                                resolve();
                            }).then(r => {
                                setTimeout(() => {  term.write('\r\n:' + curdir + " $ "); }, 200);
                            })
                        }
                    }
                })
            }
        }
    }
</script>


<style scoped>
    .btn{
        margin-top: 20px;
    }

    #terminal{
        margin-left: 37%;
        margin-right: auto;
        margin-bottom: 5%
    }
</style>