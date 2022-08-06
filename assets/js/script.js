var button = document.querySelector("#button");
var startingText = document.querySelector(".starting-text");
var welcomeText = document.querySelector(".welcome-text");
var questionBox = document.querySelector(".starting");

var score = 0;
var timeLeft = 60;

var wrong = function () {
    alert("Wrong, minus 5 seconds and minus 5 points!");
    timeLeft -= 5;
    score -= 5;
    console.log(score);
};

var questions = [
    {
        question: "Which country has the highest life expectancy?",
        answerOne: "United States",
        answerTwo: "Sweden",
        answerThree: "Zimbabwe",
        answerFour: "Hong Kong"
    },
    {
        question: "What is the most common surname in the United States?",
        answerOne: "Johnson",
        answerTwo: "Smith",
        answerThree: "Jones",
        answerFour: "Williams"
    }
]


var startGame = function() {
    startingText.remove();
    button.remove();
    welcomeText.textContent = "60 seconds remaining!";

    var timer = setInterval(function() {
        if (timeLeft > 1) {
            welcomeText.textContent = timeLeft + " seconds remaining!";
            timeLeft--;
        } else if (timeLeft === 1) {
            welcomeText.textContent = timeLeft + " second remaining!";
            timeLeft--;
        } else {
            clearInterval(timer);
            welcomeText.textContent = "Time's up!"
        }
    }, 1000);

    startQuiz();
}

var startQuiz = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.textContent = questions[0].question;
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "wrong-answers";
    answerOne.textContent = questions[0].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "wrong-answers";
    answerTwo.textContent = questions[0].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "wrong-answers";
    answerThree.textContent = questions[0].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "correct-answers";
    answerFour.textContent = questions[0].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
    }
    
    answerOne.addEventListener("click", wrong);
    answerTwo.addEventListener("click", wrong);
    answerThree.addEventListener("click", wrong);
    answerFour.addEventListener("click", right);
}

button.addEventListener("click", startGame);