<template>
    <div>
        <img alt="Logo" src="../assets/logo.png" class="logo"/>
        <p :key="user"> Welcome {{this.user}} </p>
    </div>
</template>

<script>

export default {
    name:'AppHeader',
    data(){
        return{
            user: localStorage.getItem("usrName"),
        }
    },
}
</script>
