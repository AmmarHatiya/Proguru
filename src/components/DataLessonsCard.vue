<template>
  <body>
    <div class="welcome-text">
      Welcome to Data Types!
      <div class="supporting-text">
        Here, you'll be learning about some fundamental data types in programming. To
        keep things simple, you'll be learning about them in Python. Click on a lesson
        below to begin!
      </div>
    </div>
    <div class="card-group">
      <div style="cursor: pointer" class="card" @click="toString">
        <img
          class="card-img-top"
          src="../assets/string.png"
          alt="Card image cap"
        />
      </div>
      <div style="cursor: pointer" class="card" @click="toNumeric">
        <img
          class="card-img-top"
          src="../assets/numeric.png"
          alt="Card image cap"
        />

      </div>
    </div>
  </body>
</template>


<script>
export default {
  name: "DataLessonsCard",
  methods: {
    toString() {
      this.$router.replace("/datatypes/strings");
    },
    toNumeric() {
      this.$router.replace("/datatypes/numeric");
    },
  },
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700";
body {
  font-family: "Raleway";

}
.welcome-text{
  margin: 2rem;
  font-size: 130%;
  font-weight: bolder;
}

.card-group {
  display: flex;
  width: 75%;
  margin: auto;
  place-items: center;
  font-weight: bold;
}

.card-img-top {
  background: white;
}
.card-img-top:hover {
  border: 20px solid #700000;
  background: #700000;
}
</style>
