<template>
  <body id="app">
    <div class="wrapper">
      <!-- Sidebar  -->
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>Learning Guide</h3>
        </div>

        <ul class="list-unstyled components">
          <li class="active">
            <a id="stringlesson" href="#stringlesson" data-toggle="collapse"
              >Lesson</a
            >
          </li>
          <li class="active">
            <a
              id="stringquiz"
              onclick="console.log('AYOOO');"
              href="#stringquiz"
              data-toggle="collapse"
              >Quiz</a
            >
          </li>
        </ul>
      </nav>

      <!-- Page Content  -->
      <div id="content">
        <div class="container-fluid">
          <button
            style="
              color: White !important;
              background: #700000;
              border-color: grey;
            "
            type="button"
            id="sidebarCollapse"
            class="btn btn-info"
          >
            <i class="fas fa-align-left"></i>
            <span>Hide / Show</span>
          </button>
        </div>
        <div id="lesson">
          <h2>Lesson 1: Strings</h2>
          <p>
            Strings are one of the most fundamental data types in programming. A
            string is made up of an ordered sequence of characters. For example,
            "hello world" is a data value of type string. In Python, can be
            surrounded by either double quotes or single quotes. This means that
            'Ammar' is equivalent to "Ammar".
          </p>
          <p></p>

          <div class="line"></div>

          <h2>Lorem Ipsum Dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="line"></div>

          <h3>Lorem Ipsum Dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
         <!-- <div id="quiz">
          <form>
            <h5>A string is an ordered sequence of _____.</h5>
            <div class="form-group" id="knowledgeCheck1">
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  style="margin-left: -700px"
                  class="form-check-label"
                  for="exampleCheck1"
                  >Characters</label
                >
              </div> -->
      
        <div id="quiz"></div>
        <button id="submit">Submit Quiz</button>
        <div id="results"></div>
      </div>
    </div>
  </body>
</template>



<script >
import $ from "jquery";
export default {
  name: "DTSidebar",
  methods: {},
  mounted: function () {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("submit").style.display = "none";

    function buildQuiz() {
        console.log("BUILDQUIZ called");
        // variable to store the HTML output
        const output = [];
            
        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
          // variable to store the list of possible answers
          const answers = [];
          var letter;
          // and for each available answer...
          for (letter in currentQuestion.answers) {
            // ...add an HTML radio button
            answers.push(
              `<div class="form-check>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <input type="radio" class="form-check-input" name="question${questionNumber}" value=${letter} id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label></div>`
            );
          }

          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div></div>`
          );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML += output.join("");
      }

      function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
          // find selected answer
          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {})
            .value;

          // if answer is correct
          if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = "lightgreen";
          }
          // if answer is wrong or blank
          else {
            // color the answers red
            answerContainers[questionNumber].style.color = "red";
          }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      }

      const quizContainer = document.getElementById("quiz");
      const resultsContainer = document.getElementById("results");
      const submitButton = document.getElementById("submit");
      const myQuestions = [
        {
          question: "Strings are an ordered sequence of ______",
          answers: {
            a: "Pythons",
            b: "Integers",
            c: "Characters",
          },
          correctAnswer: "c",
        },
        {
          question: "Which of the following is true regarding Strings in Python?",
          answers: {
            a: "Strings are only available through the numpy library",
            b: "Indexing over a Strings is impossible",
            c: "Double and Single quotes are equivalent",
          },
          correctAnswer: "c",
        },
        {
          question: "Which of the following successfully prints 'Hello World' ?",
          answers: {
            a: "print(Hello World)",
            b: "print('Hello World')",
            c: "print(Hello, World)",
            d: "print(Hello + World)",
          },
          correctAnswer: "b",
        },
        {
          question: "True or False: Strings are one of the most advanced data types in Python",
          answers: {
            a: "True",
            b: "False",

          },
          correctAnswer: "b",
        },
      ];




    // When lesson sidebar is clicked, then display
    document.getElementById("stringlesson").onclick = function () {
      document.getElementById("lesson").style.display = "";
      document.getElementById("submit").style.display = "none";
      document.getElementById("quiz").style.display = "none";
    };
    // When quiz sidebar button is clicked, then display
    document.getElementById("stringquiz").onclick = function () {
      document.getElementById("quiz").style.display = "";
      document.getElementById("lesson").style.display = "none";
      document.getElementById("submit").style.display = "";

      quizContainer.innerHTML= "";
      resultsContainer.innerHTML= "";
      
      // Kick things off
      buildQuiz();

      // Event listeners
      submitButton.addEventListener("click", showResults);
    };

    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });
  },
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700";

.question {
  font-weight: 600;
}
.answers {
  margin-bottom: 20px;
}
.answers label {
  display: block;
}
#submit {
  font-family: sans-serif;
  font-size: 20px;
  background-color: #279;
  color: #fff;
  border: 0px;
  border-radius: 3px;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 20px;
}
#submit:hover {
  background-color: #38a;
}

#exampleCheck1,
#exampleCheck2,
#exampleCheck3 {
  margin-left: 600px;
}
#knowledgeCheck1 {
  font-family: "Raleway";
}
body {
  font-family: "Raleway", sans-serif;
  background: #ffffff;
}
p {
  font-family: "Raleway", sans-serif;
  font-size: 1.2em;
  font-weight: 450;
  line-height: 1.7em;
  color: rgb(0, 0, 0);
}
a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed rgb(255, 255, 255);
  margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

#sidebar {
  font-family: "Raleway", sans-serif;
  min-width: 250px;
  max-width: 250px;
  background: #700000;
  color: #fff;
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #700000;
}

#sidebar ul.components {
  padding: 40px 0;
  border-bottom: 1px solid #ffffff;
  border-top: 1px solid #ffffff;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 18px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #700000;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #700000;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #700000;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #700000;
}

a.article,
a.article:hover {
  background: #700000 !important;
  color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}

#sidebarCollapse {
  margin-left: -1350px;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>
