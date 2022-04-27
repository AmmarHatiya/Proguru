<template>
    <div class="row top">
        <div class="col-sm">
        </div>
        <div class="col-sm">
            <form @submit.prevent="login">
            <!-- Username -->
            <div class="form-outline ">
                <input type="text" id="uName" class="form-control rect-box" v-model="uname" />
                <label class="form-label" for="uName">New Username</label>
            </div>

            <!-- Password -->
            <div class="form-outline box2">
                <input type="password" id="pWord" class="form-control rect-box" v-model="pword" />
                <label class="form-label" for="pWord">New Password</label>
            </div>

            <div class="form-outline box3">
                <input type="email" id="email" class="form-control rect-box" v-model="email" />
                <label class="form-label" for="email">New Email</label>
            </div>

            <div class="errormessage">{{errorMessage}}</div>
            <div class="successmessage">{{successMessage}}</div>

            <button type="login" class="btn btn-primary btn-block">Register</button>
            </form>
        </div>
        <div class="col-sm">
        </div>
    </div>
</template>




<script>

    const axios = require('axios').default;
    var qs = require('qs');
    export default {
        name: "RegisterForm",
        data(){
            return{
                uname: "",
                pword: "",
                email: "",
                errorMessage: "",
                successMessage: ""
            }
        },
        methods:{
            login(){
                console.log('Post to register');
                var ledata = qs.stringify({
                        'username': this.uname,
                        'password': this.pword,
                        'email': this.email 
                        });
                let config = {
                    method: 'post',
                    url: 'http://localhost:3000/register',
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
                        console.log("Register successful")
                        this.errorMessage = ""
                        this.successMessage = `Registration is successful!
                        You will be automatically redirected to the login page`
                        //reroute to home
                        setTimeout( () => this.$router.push({ path: '/login'}), 3000);

                    } else{
                        console.log("Bad Register")
                        this.errorMessage = "Username is already taken"
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

.successmessage{
    color:green;
}


</style>