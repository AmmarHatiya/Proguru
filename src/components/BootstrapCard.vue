<template>
        <div class="card-group">
    <div class="card" @click="toBash">
        <img class="card-img-top" src="../assets/placeholder.png" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Bash (Naida)</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div class="card" @click="toC">
        <img class="card-img-top" src="../assets/placeholder.png" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">C++ (Meghna)</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div class="card" @click="toDataTypes">
        <img class="card-img-top" src="../assets/placeholder.png" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Data Types (Ammar)</h5>
        <p class="card-text">Covers fundamental data types prevalent in computer science. </p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    </div>
</template>


<script>

export default {
    name:'BootstrapCard',
    methods:{
        toBash(){
            this.$router.replace('/bash');
        },
        toDataTypes(){
            this.$router.replace('/datatypes');
        },
        toC(){
            this.$router.replace('/cplusplus');
        },
    }
}
</script>
