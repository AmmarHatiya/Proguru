<template>
    <div class="row top">
        <div class="col-sm">
        </div>
        <div class="col-sm">
            <form @submit.prevent="login">
            <!-- Username -->
            <div class="form-outline ">
                <input type="text" id="uName" class="form-control rect-box" v-model="uname" />
                <label class="form-label" for="uName">Username</label>
            </div>

            <!-- Password -->
            <div class="form-outline box2">
                <input type="password" id="pWord" class="form-control rect-box" v-model="pword" />
                <label class="form-label" for="pWord">Password</label>
            </div>

            <div class="errormessage">{{errorMessage}}</div>

            <button type="login" class="btn btn-primary btn-block">Sign in</button>

            <!-- Register -->
            <div class=row>
                <div class="col text-end">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
                <div class="col text-start">
                 <!-- May be implemented -->
                 <a href="#!">Forgot your password?</a>
                 </div>
            </div>
            </form>
        </div>
        <div class="col-sm">
        </div>
    </div>
</template>




<script>

    import auth from '../js/auth';
    import $ from 'jquery'
    const axios = require('axios').default;
    var qs = require('qs');
    export default {
        name: "LoginForm",
        data(){
            return{
                uname: "",
                pword: "",
                errorMessage: ""
            }
        },
        methods:{
            login(){
                console.log('Call login()');
                var ledata = qs.stringify({
                        'username': this.uname,
                        'password': this.pword 
                        });
                let config = {
                    method: 'post',
                    url: 'http://localhost:3000/login',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data : ledata
                }
                // console.log("name:",this.uname)
                // console.log("pword:",this.pword)
                // console.log(config)
                axios(config).then(response => {
                    if(response.data.includes("successful")){
                        console.log("login successful")
                        //save the active user id to session
                        var ledata2 = {
                            'username': this.uname,
                            'password': this.pword 
                        };
                        let config2 = {
                            "url": "http://localhost:3000/",
                            "method": "POST",
                            "timeout": 0,
                            "headers": {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            "data" : ledata2
                        }
                        $.ajax(config2).done(function (response) {
                            localStorage.uID = response;
                        });
                        //reroute to home
                        this.$router.replace('/');

                    } else{
                        console.log("login unsuccessful, need to show error")
                        this.errorMessage = "Invalid username or password"
                    }})
            }
        }
    }
</script>


<style scoped>
.top{
    margin-top: 20px;
}

.btn{
    margin-top: 10px;
    margin-bottom: 10px;
    width: 45%;
}

.rect-box{
    width: 80%;
    margin-left: 10%;
}

.forgot{
    margin-right: 10%;
}

.errormessage{
    color:red;
}


</style>