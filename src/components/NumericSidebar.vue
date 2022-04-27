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
            <a
              class="elem"
              id="numericlesson"
              href="#numericlesson"
              data-toggle="collapse"
              >Lesson</a
            >
          </li>
          <li class="active">
            <a
              class="elem"
              id="numericquiz"
              href="#numericquiz"
              data-toggle="collapse"
              >Quiz</a
            >
          </li>
        </ul>
      </nav>

      <!-- Page lesson/quiz  -->
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
          <h1>Lesson 2: Numeric Data Types</h1>
          <p>
            Numerical Data is used everywhere. From the velocity of a rocket
            exiting the Earth's atmosphere, to the amount of water pressure
            along the Mariana Trench, numerical data can and is used to
            represent a great deal of concepts in the world. For this reason its
            important for us to master the use and manipulation of data in this
            form. In Python, two of the most rudimentary forms of numeric data
            are integers and floats. Most other numeric data types build off of
            these two so, we'll be focusing on them for now.
          </p>

          <img
            style="margin-bottom: -70px; width: 10%"
            src="../assets/rocketgif.gif"
          />

          <div class="line"></div>

          <h3>Integers</h3>
          <p>
            Integers in Python are any negative, zero, or positive whole
            numbers. Note that integers cannot have a fractional part. That is,
            -78945 is an integer, but -452.5 is not. In Python, integers have
            unlimited precision meaning that they can be however big or small
            you want them to be. We initialize integers by:
          </p>
          <p
            style="
              margin-right: 18rem;
              margin-left: 18rem;
              background: #700000;
              color: white;
              font-family: 'Courier';
            "
          >
            var_name = 45
          </p>
          <p>
            Here, our variable name is var_name, located on the left side of the
            equation. On the other side, we have the integer value we wish to
            assign (in this case, 45). Once we initialize it, we can now use the
            variable name in operations that are valid for integers. We will
            cover more on that later.
          </p>
          <p>
            If in some case we have a fractional number or even a string we want
            to convert to an integer, we can use the int() function. This is
            called typecasting and is very common in programming. For example:
          </p>
          <p
            style="
              margin-right: 18rem;
              margin-left: 18rem;
              background: #700000;
              color: white;
              font-family: 'Courier';
            "
          >
            int('8.5')
          </p>
          <p>
            In this case, the line would return an integer value of 8. Notice
            that the 0.5 is not included because fractional parts of numbers
            cannot be represented using integers.
          </p>

          <img
            style="margin-bottom: -70px; width: 7%"
            src="../assets/float.gif"
          />

          <div class="line"></div>

          <h3>Floats</h3>
          <p>
            You may have noticed that since integers cannot represent fractional
            numbers, they are very limited. Thankfully, floats exist in Python.
            With floats, we can safely represent fractional numbers.
            Specifically, a number such as 5.689 which would be impossible to
            represent as an integer, can be represented as a float. We
            initialized floats the same exact way as integers, and we can also
            typecast floats via the float() function (see below).
          </p>
          <p
            style="
              margin-right: 18rem;
              margin-left: 18rem;
              background: #700000;
              color: white;
              font-family: 'Courier';
            "
          >
            float('8')
          </p>
          <p>
            The above statement would return a float value of 8.0. Notice that
            we added '.0' to the end of the number to denote the difference. 
            If you are ever confused by the type of any variable (numerical or otherwise), 
            feel free to use the type() function, which will return
             the type of the variable you specify (as an argument). 
          </p>
          <div class="line"></div>

          <h3>Operations</h3>
          <p>
            There are many mathematical operations we can perform with both
            integers and floats. Below are some of Python's built-in
            operators:
          </p>

          <div class="line"></div>

          <table style="font-family: 'Raleway'; font-size: 120%; font-weight:700;" class="table">
            <thead>
              <tr>
                <th scope="col">Operator</th>
                <th scope="col">Usage/Function</th>
                <th scope="col">Example >> Value Returned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="font-size: 160%;" scope="row">+</th>
                <td>Addition: adds both numbers</td>
                <td>1+1 >> 2</td>
              </tr>
              <tr>
                <th style="font-size: 160%;" scope="row">-</th>
                <td>Subtraction: subtracts right side from left side</td>
                <td>2-1 >> 1</td>
              </tr>
              <tr>
                <th style="font-size: 160%;" scope="row">*</th>
                <td>Multiplication: multiplies both numbers</td>
                <td>3*2 >> 6</td>
              </tr>
              <tr>
                <th style="font-size: 160%;" scope="row">/</th>
                <td>Division: divides left side by right side</td>
                <td>6/2 >> 3</td>
              </tr>
              <tr>
                <th style="font-size: 160%;" scope="row">%</th>
                <td>Modulus: remainder of the division of left side by right side</td>
                <td>22%10 >> 2</td>
              </tr>
              <tr>
                <th style="font-size: 160%;" scope="row">**</th>
                <td>Exponent: left side to the power of the right side</td>
                <td>3**2 >> 9</td>
              </tr>
            </tbody>
          </table>

          <div class="line"></div>

          <p style="font-size: 140%">
            Overall, integers and floats are extremely useful data types in programming. 
            Using Python's built-in operators, we can represent the 
            majority of mathematical computations that are possible.
            Familiarizing yourself with the things we've covered in this lesson
            will only help to strengthen your knowledge base and make you an even 
            better programmer. Good Luck!
          </p>
        </div>
        <div style="font-weight: 700" id="quiz"></div>
        <div id="final">
          <div style="vertical-align: middle; display: inline-block">
            <button style="margin-left: -350px" id="submit">Submit Quiz</button>
            <svg
              id="pie"
              style="margin-right: -700px"
              width="300"
              height="200"
            ></svg>
          </div>
          <div
            style="
              color: #700000;
              font-weight: 800;
              font-size: 120%;
              margin-left: 525px;
            "
            id="results"
          ></div>
        </div>
      </div>
    </div>
  </body>
</template>



<script >
import $ from "jquery";
import * as d3 from "d3";
export default {
  name: "NumericSidebar",
  methods: {},
  mounted: function () {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("final").style.display = "none";

    function drawQuiz() {
      console.log("drawQuiz called");
      // store output
      const output = [];

      // loop through every question and 
      Questions.forEach((curr, Qnum) => {
        // variable to store the list of possible answers
        const answers = [];
        var letter;
        // and for each available answer...
        for (letter in curr.answers) {
          // ...add an HTML radio button
          answers.push(
            `<div style="font-family: 'Raleway'" class="form-check>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <input type="radio" style="margin:0.5rem; class="form-check-input" name="question${Qnum}" value=${letter} id="flexRadioDefault1">
              <label style="margin:0.5rem; font-size:110%;" class="form-check-label" for="flexRadioDefault1">
              ${letter} :
              ${curr.answers[letter]}
            </label></div>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div style="font-family: 'Raleway'; font-size: 150%;" class="question"> ${
            curr.question
          } </div>
          <div style="margin: 2rem;"class="answers"> ${answers.join(
            ""
          )} </div></div>`
        );
      });

      // join every entry in output and make it one html part
      quizPortion.innerHTML += output.join("");
    }

    function showResults() {
      // get all answers
      const answersPortion = quizPortion.querySelectorAll(".answers");

      let numRight = 0;

      // for every question
      Questions.forEach((curr, Qnum) => {
        // currentanswer for the question
        const currAns = answersPortion[Qnum];
        const selector = `input[name=question${Qnum}]:checked`;
        const userAnswer = (currAns.querySelector(selector) || {})
          .value;

        // if right
        if (userAnswer === curr.correctAnswer) {
          numRight++;
          // Make answer green
          answersPortion[Qnum].style.color = "green";
        }
        // if answer is wrong 
        else {
          // make answer red
          answersPortion[Qnum].style.color = "red";
        }
      });

      // print number of correct answers out of total
      resultsContainer.innerHTML = `${numRight} out of ${Questions.length}`;

      // data for pie chart, right vs wrong
      var data = [`${numRight}`, `${Questions.length - numRight}`];


      var svg = d3.select("svg"),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2,
        g = svg
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      var color = d3.scaleOrdinal(["green", "red"]);

      // generate pie
      var pie = d3.pie();

      // generate the arcs
      var arc = d3.arc().innerRadius(0).outerRadius(radius);

      //Generate groups
      var arcs = g
        .selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

      //Draw arcs
      arcs
        .append("path")
        .attr("fill", function (d, i) {
          return color(i);
        })
        .attr("d", arc);
    }

    // list of our questions
    const quizPortion = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const Questions = [
      {
        question: "True or False: In the following statement, the variable var_name is an integer: >>var_name = 4.0",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "b",
      },
      {
        question: "Which of the following is true regarding Integers in Python?",
        answers: {
          a: "Integers are only available through the math module",
          b: "Integers have unlimited precision",
          c: "Integers always contain decimals",
        },
        correctAnswer: "b",
      },
      {
        question: "Which of the following returns 9?",
        answers: {
          a: "a*8",
          b: "3*2",
          c: "3**2",
          d: "8**1",
        },
        correctAnswer: "c",
      },
      {
        question:
          "True or False: The following line returns float: >>type('7.2')",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "b",
      },
      {
        question: "What will  the following line return: >>float('9')",
        answers: {
          a: "9",
          b: "9.0",
          c: "9.2",
        },
        correctAnswer: "b",
      },
    ];

    // animations when mouse hovers over sidebar buttons
    document.getElementById("numericlesson").onmouseover = function () {
      document.getElementById("numericlesson").style.border = "1px solid white";
    };
    document.getElementById("numericlesson").onmouseleave = function () {
      document.getElementById("numericlesson").style.border = "";
    };
    document.getElementById("numericquiz").onmouseover = function () {
      document.getElementById("numericquiz").style.border = "1px solid white";
    };
    document.getElementById("numericquiz").onmouseleave = function () {
      document.getElementById("numericquiz").style.border = "";
    };

    // When lesson sidebar is clicked, then display
    document.getElementById("numericlesson").onclick = function () {
      document.getElementById("lesson").style.display = "";
      document.getElementById("final").style.display = "none";
      document.getElementById("quiz").style.display = "none";
    };
    // When quiz sidebar button is clicked, then display
    document.getElementById("numericquiz").onclick = function () {
      document.getElementById("quiz").style.display = "";
      document.getElementById("lesson").style.display = "none";
      document.getElementById("final").style.display = "";

      quizPortion.innerHTML = "";
      resultsContainer.innerHTML = "";
      document.getElementById("pie").innerHTML = "";

      drawQuiz();

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

body {
  font-family: "Raleway", sans-serif;
  background: #ffffff;
}
p {
  margin-top: 15px;
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
/* To get rid of text decoration on hyperlinks */
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed rgb(255, 255, 255);
  margin: 30px 0;
}

/* ---------------
    sidebar 
------------------ */

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
  background: #ffffff;
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
.question {
  font-weight: 600;
  font-family: "Raleway";
  font-size: 150%;
}
.answers {
  margin-bottom: 20px;
  margin: 2rem;
}
.answers label {
  display: block;
}
#submit {
  font-family: sans-serif;
  font-size: 20px;
  margin: 2rem;
  background-color: #700000;
  color: #fff;
  border: 0px;
  border-radius: 3px;
  padding: 20px;
  cursor: pointer;
  margin-bottom: 20px;
}
#submit:hover {
  background-color: rgb(0, 0, 0);
}
/* ----------------
    content 
------------------- */

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}

#sidebarCollapse {
  margin-left: -950px;
}

/* --------------
    screen size adjust
----------------- */

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
