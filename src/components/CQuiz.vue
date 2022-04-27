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
            <h1>Test Your Knowledge!</h1>
            <div class="quiz-container" id="quiz">
              <div class="quiz-header">
                <h2 id="question">Question Text</h2>
                <ul>
                  <li>
                    <input type="radio" name="answer" id="a" class="answer" />
                    <label for="a" id="a_text">Answer</label>
                  </li>
                  <li>
                    <input type="radio" name="answer" id="b" class="answer" />
                    <label for="b" id="b_text">Answer</label>
                  </li>
                  <li>
                    <input type="radio" name="answer" id="c" class="answer" />
                    <label for="c" id="c_text">Answer</label>
                  </li>
                  <li>
                    <input type="radio" name="answer" id="d" class="answer" />
                    <label for="d" id="d_text">Answer</label>
                  </li>
                </ul>
              </div>
              <button id="submit">Submit</button>
            </div>
          </body>
        </div>
      </div>
    </div>
  </body>
</template>



<script >
export default {
  name: "CQuiz",
  methods: {
    toQuiz() {
      this.$router.replace("/Cquiz");
    },
    toLesson() {
      this.$router.replace("/cplusplus");
    },
  },
  mounted: function () {
      const quizData = [
    {
        question: "The symbol for the address of operator:",
        a: "&",
        b: "*",
        c: "%",
        d: "#",
        correct: "a",
    },
    {
        question: "Which statement is true?",
        a: "It is not possible to access the memory address of a variable",
        b: "Programs are in control of the exact memory addresses allocated",
        c: "The environment controls the memory addresses during runtime",
        d: "Variables cannot be declared in C++",
        correct: "c",
    },
    {
        question: "A pointer that stores the address of foo:",
        a: "string* ptr = foo;",
        b: "string ptr = foo;",
        c: "string* ptr = *foo;",
        d: "string* ptr = &foo;",
        correct: "d",
    },
    {
        question: "Output the value of the pointer ptr:",
        a: "cout << *ptr;",
        b: "cout << ptr;",
        c: "cout << &ptr;",
        d: "cout << ptr&;",
        correct: "a",
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else if(score <= 1) {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly! Study more!</h2>
           <p><img src="../assets/study.png" alt="Get Studying!" width="200" height="200" class="d-inline-block align-text-top"></p>
           <button onclick="location.reload()">Reload</button>`
       } else if(score == 2) {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly! You're halfway there!</h2>
            <p><img src="../assets/halfway.png" alt="2/4" width="150" height="200" class="d-inline-block align-text-top"></p>
            <button onclick="location.reload()">Reload</button>`
       } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly! You're a quiz ninja!</h2>
        <p><img src="../assets/ninja.png" alt="WOW!" width=200" height="200" class="d-inline-block align-text-top"></p>
            <button onclick="location.reload()">Reload</button>`
       }
    }
})
  },
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700";

h1 {
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  height: 12%;
  background-color: #5f7e83;
}

nav {
  width: 100%;
  height: 10%;
}

a {
  font-size: medium;
}

body {
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #f5f7f7 100%);
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
}

.quiz-container {
  vertical-align: bottom;
  background-color: #fff;
  border-radius: 10px;

}

.quiz-header {
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 0;
}

h2 {
  padding: 1rem;
  text-align: center;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1.2rem;
  margin: 1rem 0;
}

ul li label {
  cursor: pointer;
}

button {
  background-color: #03cae4;
  color: #fff;
  border: none;
  display: block;
  width: 100%;
  height: 23%;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: inherit;
  padding: 1.3rem;
}

button:hover {
  background-color: #04adc4;
}

button:focus {
  outline: none;
  background-color: #44b927;
}
</style>
