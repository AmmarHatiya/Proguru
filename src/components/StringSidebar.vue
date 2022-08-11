<template>
<!-- DataTypes lesson Sidebar component/feature-->
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
              id="stringlesson"
              href="#stringlesson"
              data-toggle="collapse"
              >Lesson</a
            >
          </li>
          <li class="active">
            <a
              class="elem"
              id="stringquiz"
              href="#stringquiz"
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
          <h1>Lesson 1: Strings</h1>
          <p>
            Strings are one of the most fundamental data types in programming. A
            string is made up of an ordered sequence of characters. For example,
            "hello world" is a data value of type string. In Python, can be
            surrounded by either double quotes or single quotes. That means
            'Ammar' is equivalent to "Ammar".
          </p>
          <img style="margin-bottom: -50px; width:10%;" src="../assets/alphabetgif.gif">


          <div class="line"></div>

          <h3>Displaying, Initializing, & Accessing</h3>
          <p>
            To display a string, we use the print() method. The line print("Web
            Development") would result in the string "Web Development" being
            written to our console. In practice, printing as we've done in the
            example above isn't very common. Instead, we assign our strings to
            variables. This is done like so:
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
            var_name = "We place our String here"
          </p>
          <p>
            Here, the left side of our equation contains our variable name (in
            this case, var_name). On the other side of the equal sign, we have
            the string we wish to assign to var_name. Once initialized, 
            we can index our variable just as we index other sequences. 
            We use square brackets beside our variable name to retrieve 
            the character at a certain index. For example: 
          </p><p
            style="
              margin-right: 18rem;
              margin-left: 18rem;
              background: #700000;
              color: white;
              font-family: 'Courier';
            "
          >
            print(var_name[0])
          </p>
          <p>This statement would result in the character 'W' being printed on our Python console. 
            Note that when indexing, our values start from 0. We can also index in reverse
            (i.e var_name[-1] would return the last character of our string which is 'e'). </p>
          <div class="line"></div>

          <h3>String Methods</h3>
          <p>
            Python has many built-in methods that we can use with strings. 
            One of the most popular functions, is the len() function, which returns the length of the given string.</p>
            <p
            style="
              margin-right: 18rem;
              margin-left: 18rem;
              background: #700000;
              color: white;
              font-family: 'Courier';
            "
          >
            print(len(var_name))
          </p><p>
            The above statement would return 24 (Note that the count includes whitespace). 
            That is, there are 24 characters in the string variable var_name. Another commonly used 
            string method is the count method. The count method takes one argument and counts the 
            amount of times that its argument appears within the string. In our case, the line </p>
                        <p
            style="
              margin-right: 18rem;
              margin-left: 18rem;
              background: #700000;
              color: white;
              font-family: 'Courier';
            "
          >
            print(var_name.count('e'))
          </p>
            <p>
            would return a value of 4, since there are 4 'e' characters within var_name.
            Overall, there are many useful built-in methods for strings in Python. 
            Adding these to your programming toolset will make it easier for you to work with strings in the future.
            For a comprehensive list of all of Python's built-in string functions, 
            click <a style="color: #700000; font-weight: 700; font-size:115%;" href="https://www.w3schools.com/python/python_ref_string.asp">here.</a>
          </p>
          <div class="line"></div>

          <p style="font-size: 140%;">In conclusion, the String data type is one of the most fundamental/basic data types in programming. 
            The quicker you master it, the quicker you'll be on your way to becoming an expert programmer!</p>

        </div>
        <div style="font-weight: 700;" id="quiz"></div>
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
          <div style="color: #700000; font-weight: 800; font-size: 120%; margin-left: 525px" id="results"></div>
        </div>
      </div>
    </div>
  </body>
</template>



<script >
import $ from "jquery";
import * as d3 from "d3";
export default {
  name: "StringSidebar",
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
        question:
          "True or False: Strings are one of the most advanced data types in Python",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "b",
      },
      {question: "Performing len('Hello World ') returns: ",
        answers: {
          a: "10",
          b: "11",
          c: "12",
        },
        correctAnswer: "c",
      },
    ];

    // animations when mouse hovers over sidebar buttons
    document.getElementById("stringlesson").onmouseover = function () {
      document.getElementById("stringlesson").style.border = "1px solid white";
    };
    document.getElementById("stringlesson").onmouseleave = function () {
      document.getElementById("stringlesson").style.border = "";
    };
        document.getElementById("stringquiz").onmouseover = function () {
      document.getElementById("stringquiz").style.border = "1px solid white";
    };
    document.getElementById("stringquiz").onmouseleave = function () {
      document.getElementById("stringquiz").style.border = "";
    };

    // When lesson sidebar is clicked, then display
    document.getElementById("stringlesson").onclick = function () {
      document.getElementById("lesson").style.display = "";
      document.getElementById("final").style.display = "none";
      document.getElementById("quiz").style.display = "none";
    };
    // When quiz sidebar button is clicked, then display
    document.getElementById("stringquiz").onclick = function () {
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
a:link { text-decoration: none; }

a:visited { text-decoration: none; }

a:hover { text-decoration: none; }

a:active { text-decoration: none; }

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
