<template>
<!-- Component for login logic  -->
    <div>
        <router-link to="/"> Home </router-link> |
        <router-link v-if="!isLoggedIn" to="login"> Login </router-link>
        <a  v-if="isLoggedIn" v-on:click="logout"> Logout </a>
    </div>
</template>

<script>
    import auth from '../js/auth'
    export default{
        name: 'AppNav',
        data() {
            return { isLoggedIn: this.amILoggedIn()};
        },
        created(){
            auth.onLoginStatus = isLoggedIn =>{
                this.isLoggedIn = isLoggedIn;
            }
        },
        methods:{
            amILoggedIn(){
                return !!localStorage.usrName
            },
            logout: function(){
                auth.logout( (res) =>{
                    console.log(res)
                });
                this.$router.go(0)
            }
        }
    }
</script>



