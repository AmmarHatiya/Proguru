<template>
    <!-- <form @submit.prevent="login">
        <label for="username"> Username: </label>
        <input type="text" v-model="username" name="username" placeholder="Username"/>

        <label for="password"> Password: </label>
        <input type="password" v-model="password" name="password" placeholder="Password"/>
        <div v-if="errorMessage"> {{errorMessage}} </div>
        <button class="btn"> Login </button>

    </form> -->

    <div class="row top">
        <div class="col-sm">
        </div>
        <div class="col-sm">
            <form>
            <!-- Email input -->
            <div class="form-outline ">
                <input type="email" id="form2Example1" class="form-control rect-box" />
                <label class="form-label" for="form2Example1">Username</label>
            </div>

            <!-- Password input -->
            <div class="form-outline box2">
                <input type="password" id="form2Example2" class="form-control rect-box" />
                <label class="form-label" for="form2Example2">Password</label>
            </div>

            <!-- Submit button -->
            <button type="button" class="btn btn-primary btn-block">Sign in</button>

            <!-- Register buttons -->
            <div class=row>
                <div class="col text-end">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
                <div class="col text-start">
                 <!-- Simple link -->
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
    const axios = require('axios').default;
    export default {
        name: "LoginForm",
        data(){
            return{
                username: "Bret",
                password: "hildegard.org",
                errorMessage: ""
            }
        },
        methods:{
            login(){
                console.log('Call login()');
                let config = {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    }
                }
                axios
                    .get('http://localhost:3000',config)
                    .then(response => console.log("From vue:",response));
                // auth.login(this.username, this.password, (res) => {
                //     if (res.auth){
                //         //Login succesful, go to home page.
                //         console.log('Login success');
                //         this.$router.replace('/');
                //     } else{
                //         //Login failed.
                //         console.log('Login failed');
                //         this.errorMessage = "Login failed";
                //     }
                // })
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



</style>