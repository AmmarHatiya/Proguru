<template>
        <div class="card-group">
    <div class="card" @click="toBash">
        <img class="card-img-top" src="../assets/bashpic.png" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Bash</h5>
        <p class="card-text">A small exercise in using Terminal, give it a try!</p>
        </div>
    </div>
    <div class="card" @click="toC">
        <img class="card-img-top " src="../assets/placeholder.png" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">C++</h5>
        <p class="card-text">A brief introduction to C++.</p>
        </div>
    </div>
    <div class="card" @click="toDataTypes">
        <img class="card-img-top" src="../assets/rocketgif.gif" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Data Types</h5>
        <p class="card-text">Covers fundamental data types prevalent in computer science. </p>
        </div>
    </div>
    </div>
</template>


<script>

export default {
    name:'BootstrapCard',
    methods:{
        toBash(){
            this.$router.push('/bash');
        },
        toDataTypes(){
            this.$router.push('/datatypes');
        },
        toC(){
            this.$router.push('/cplusplus');
        }
    }
}
</script>

<style scoped>
.bashcard{
    margin-top: 10%;
}

.card-img-top:hover {
    border: 20px solid #700000;
    background: #700000;
}

.img2{
    margin-top: 15%;
    margin-left: 120px;
    width: 70%;
    height: auto;
}

</style> 