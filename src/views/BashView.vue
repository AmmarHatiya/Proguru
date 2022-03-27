<template>
    <!-- goal: run a shell script with a press of a button -->
    <div>
        <button class="btn btn-primary" @click="init"> Start Terminal </button>
        <div id="terminal"></div>

    </div>


</template>

<script>

import { Terminal } from 'xterm'

    export default {
        name:'BashView',
        methods:{
            init(){
                console.log("???")
                var term = new Terminal();
                term.open(document.getElementById('terminal'));
                term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
            }
        }
    }
</script>


<style scoped>
    .btn{
        margin-top: 20px;
    }

    #terminal{
        margin-left: 30%;
        margin-right: auto;
    }
</style>