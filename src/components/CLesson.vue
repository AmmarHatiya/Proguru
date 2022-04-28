<template>
  <body id="app">
    <div class="wrapper">
      <!-- Page lesson/quiz  -->
      <div id="content">
        <div id="lesson">
          <body>
            <nav class="navbar navbar-dark bg-dark navbar-expand-md">
              <a class="navbar-brand" href="#">
                <img
                  src="../assets/clogo.png"
                  alt=""
                  width="30"
                  height="30"
                  class="d-inline-block align-text-top"
                />
                Learn C++</a
              >
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbar1">
                <ul class="navbar-nav mr-auto">
                  <li @click="toLesson" class="nav-item active">
                    <a style="cursor: pointer" class="nav-link" href="#"
                      >Content</a
                    >
                  </li>
                  <li @click="toQuiz" class="nav-item">
                    <a style="cursor: pointer" class="nav-link">Quiz</a>
                  </li>
                </ul>
              </div>
            </nav>
            <h1>Pointers</h1>
            <h2>Purpose</h2>
            <p>
              When a variable is declared in C++, a specific location in memory,
              a memory address, is assigned to store its value. Programs are not
              in control of these exact memory addresses as that is left to the
              environment during runtime, but it may be helpful for a program to
              know the exact memory address of a variable during runtime to
              access neighbouring data in memory which is where pointers come in
              handy.
            </p>
            <h2>Address-Of Operator (&)</h2>
            <p>
              The address of a variable can be accessed by putting the & symbol
              in front of the name. In the example, the address of myvar is
              assigned to foo and the value of myvar is assigned to bar.
            </p>
            <p class="images">
              <img
                src="../assets/address_of_operator.png"
                alt=""
                width="200"
                height="100"
                class="d-inline-block align-text-top"
              />
              <img
                src="../assets/example_1.png"
                alt=""
                width="200"
                height="100"
                class="d-inline-block align-text-top"
              />
            </p>
            <h2>Dereference Operator (*)</h2>
            <p>
              Pointers can also be used to access the value of the variable that
              it points to in memory. putting an asterisk before a pointer, or
              variable that is equal to the memory address of a variable, will
              return the value of the variable that it points to. Continuing out
              example from above, all the following statements hold true.
            </p>
            <p class="images">
              <img
                src="../assets/example_2.png"
                alt=""
                width="200"
                height="100"
                class="d-inline-block align-text-top"
              />
            </p>
            <h2>Declaring Pointers</h2>
            <p>
              Since a pointer can be dereferenced to return the value of a
              variable, pointers also need to be declared with a type such as an
              int, float, or char. It usually follows the syntax of type * name;
              where type refers to the data type pointed to by the pointer. The
              asterisk used in the declaration should not be confused with
              dereferencing. It is the same sign used for two different
              purposes, one to dereference, and one that acts as a type compound
              specifier. Follow the example below by reading the comments to
              further understand the concept.
            </p>
            <p class="images">
              <img
                src="../assets/example_3.png"
                alt=""
                width="750"
                height="400"
                class="d-inline-block align-text-top"
              />
            </p>
          </body>
        </div>
      </div>
    </div>
  </body>
</template>



<script >
import $ from "jquery";
import * as d3 from "d3";
export default {
  name: "CLesson",
  methods: {
    toQuiz() {
      this.$router.replace("/Cquiz");
    },
    toLesson() {
      this.$router.replace("/cplusplus");
    },
  },
  mounted: function () {},
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700";

body {
  margin: 0;
  padding: 0;
}

h1 {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

h2 {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  background-color: #3d8791;
  border-bottom: 1px;
  border-color: #1b454b;
  display: block;
  width: 60%;
  cursor: pointer;
  font-size: 0.5cm;
}

p {
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #c1e1e5;
  border: 1px, black;
  display: block;
  width: 60%;
  cursor: pointer;
}

p.images {
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border: 1px, black;
  display: block;
  width: 60%;
  cursor: pointer;
}
</style>
