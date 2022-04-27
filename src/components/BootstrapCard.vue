<template>
        <div class="card-group">
    <div class="card" @click="toBash">
        <img class="card-img-top bashcard" src="../assets/bashpic.png" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Bash (Naida)</h5>
        <p class="card-text">Try a small simulation of Bash terminal!</p>
        </div>
    </div>
    <div class="card">
        <img class="card-img-top" src="../assets/placeholder.png" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">C++ (Meghna)</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
    </div>
    <div class="card" @click="toDataTypes">
        <img class="card-img-top" src="../assets/rocketgif.gif" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Data Types (Ammar)</h5>
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
</style>