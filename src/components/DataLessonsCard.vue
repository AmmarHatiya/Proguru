<template>
    <div class="welcome-text">
        Welcome to Data Types!
        <div class="supporting-text">
            Here, you'll be learning about fundamental data types in programming.
            To keep things simple, you'll be learning in Python. Click on a lesson below to begin!
        </div>
    </div>
  <div class="card-group">
    <div class="card" @click="toString">
      <img
        class="card-img-top"
        src="../assets/placeholder.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Strings</h5>
        <p class="card-text">Text describing Lesson</p>
      </div>
    </div>
    <div class="card" @click="toNumeric">
      <img
        class="card-img-top"
        src="../assets/placeholder.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Numeric Data Types</h5>
        <p class="card-text">Text Describing Lesson.</p>
      </div>
    </div>
    <div class="card" @click="toSequence">
      <img
        class="card-img-top"
        src="../assets/placeholder.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Sequence Data Types</h5>
        <p class="card-text">Text Describing Lesson</p>
      </div>
    </div>
  </div>
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
    toSequence() {
      this.$router.replace("/datatypes/sequence");
    },
  },
};
</script>

<style scoped>

/* .card-group {
   important part 
  display: grid;
  place-items: center;
  grid-template-areas: "inner-div";
} */

</style>
