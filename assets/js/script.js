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
    },
    {
        question: "Which disease commonly spread on pirate ships?",
        answerOne: "Influenza",
        answerTwo: "Pneumonia",
        answerThree: "Scurvy",
        answerFour: "Tuberculosis"
    },
    {
        question: "Who was the Ancient Greek God of the Sun?",
        answerOne: "Apollo",
        answerTwo: "Ares",
        answerThree: "Hermes",
        answerFour: "Cronos"     
    },
    {
        question: "What year was the United Nations established?",
        answerOne: "1922",
        answerTwo: "1945",
        answerThree: "1956",
        answerFour: "1965"
    },
    {
        question: "Who has won the most total Academy Awards?",
        answerOne: "Lady Gaga",
        answerTwo: "Walt Disney",
        answerThree: "Brad Pitt",
        answerFour: "Will Smith"
    },
    {
        question: "What artist has the most streams on Spotify?",
        answerOne: "Ariana Grande",
        answerTwo: "Drake",
        answerThree: "Beyonce",
        answerFour: "Travis Scott"
    },
    {
        question: "How many minutes are in a full week?",
        answerOne: "10,080",
        answerTwo: "11,400",
        answerThree: "980",
        answerFour: "12,200"
    },
    {
        question: "What car manufacturer had the highest revenue in 2020?",
        answerOne: "Volkswagen",
        answerTwo: "Nissan",
        answerThree: "Ford",
        answerFour: "Tesla"
    }
]

var final = function() {
    prompt("Thank you for taking my quiz! Enter your name below:")
}

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
            alert("Time's up!")
            final();
        }
    }, 1000);

    startQuiz();
}

var startQuiz = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[0].question + "<br />";
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "answers";
    answerOne.textContent = questions[0].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "answers";
    answerTwo.textContent = questions[0].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "answers";
    answerThree.textContent = questions[0].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "answers";
    answerFour.textContent = questions[0].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        nextQuestion();
    }

    answerOne.addEventListener("click", wrong);
    answerTwo.addEventListener("click", wrong);
    answerThree.addEventListener("click", wrong);
    answerFour.addEventListener("click", right);
}

var nextQuestion = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[1].question + "<br />";
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "answers";
    answerOne.textContent = questions[1].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "answers";
    answerTwo.textContent = questions[1].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "answers";
    answerThree.textContent = questions[1].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "answers";
    answerFour.textContent = questions[1].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        nextQuestionTwo();
    }

    answerOne.addEventListener("click", wrong);
    answerTwo.addEventListener("click", right);
    answerThree.addEventListener("click", wrong);
    answerFour.addEventListener("click", wrong);
}

var nextQuestionTwo = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[2].question + "<br />";
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "answers";
    answerOne.textContent = questions[2].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "answers";
    answerTwo.textContent = questions[2].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "answers";
    answerThree.textContent = questions[2].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "answers";
    answerFour.textContent = questions[2].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        nextQuestionThree();
    }

    answerOne.addEventListener("click", wrong);
    answerTwo.addEventListener("click", wrong);
    answerThree.addEventListener("click", right);
    answerFour.addEventListener("click", wrong);
}

var nextQuestionThree = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[3].question + "<br />";
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "answers";
    answerOne.textContent = questions[3].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "answers";
    answerTwo.textContent = questions[3].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "answers";
    answerThree.textContent = questions[3].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "answers";
    answerFour.textContent = questions[3].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        nextQuestionFour();
    }

    answerOne.addEventListener("click", right);
    answerTwo.addEventListener("click", wrong);
    answerThree.addEventListener("click", wrong);
    answerFour.addEventListener("click", wrong);
}

var nextQuestionFour = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[4].question + "<br />";
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "answers";
    answerOne.textContent = questions[4].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "answers";
    answerTwo.textContent = questions[4].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "answers";
    answerThree.textContent = questions[4].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "answers";
    answerFour.textContent = questions[4].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        nextQuestionFive();
    }

    answerOne.addEventListener("click", wrong);
    answerTwo.addEventListener("click", right);
    answerThree.addEventListener("click", wrong);
    answerFour.addEventListener("click", wrong);
}

var nextQuestionFive = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[5].question + "<br />";
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "answers";
    answerOne.textContent = questions[5].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "answers";
    answerTwo.textContent = questions[5].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "answers";
    answerThree.textContent = questions[5].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "answers";
    answerFour.textContent = questions[5].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        nextQuestionSix();
    }

    answerOne.addEventListener("click", wrong);
    answerTwo.addEventListener("click", right);
    answerThree.addEventListener("click", wrong);
    answerFour.addEventListener("click", wrong);
}

var nextQuestionSix = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[6].question + "<br />";
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "answers";
    answerOne.textContent = questions[6].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "answers";
    answerTwo.textContent = questions[6].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "answers";
    answerThree.textContent = questions[6].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "answers";
    answerFour.textContent = questions[6].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        nextQuestionSeven();
    }

    answerOne.addEventListener("click", wrong);
    answerTwo.addEventListener("click", right);
    answerThree.addEventListener("click", wrong);
    answerFour.addEventListener("click", wrong);
}

var nextQuestionSeven = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[7].question + "<br />";
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "answers";
    answerOne.textContent = questions[7].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "answers";
    answerTwo.textContent = questions[7].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "answers";
    answerThree.textContent = questions[7].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "answers";
    answerFour.textContent = questions[7].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        nextQuestionEight();
    }

    answerOne.addEventListener("click", right);
    answerTwo.addEventListener("click", wrong);
    answerThree.addEventListener("click", wrong);
    answerFour.addEventListener("click", wrong);
}

var nextQuestionEight = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[8].question + "<br />";
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "answers";
    answerOne.textContent = questions[8].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "answers";
    answerTwo.textContent = questions[8].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "answers";
    answerThree.textContent = questions[8].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "answers";
    answerFour.textContent = questions[8].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        nextQuestionNine();
    }

    answerOne.addEventListener("click", right);
    answerTwo.addEventListener("click", wrong);
    answerThree.addEventListener("click", wrong);
    answerFour.addEventListener("click", wrong);
}

var nextQuestionNine = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[9].question + "<br />";
    questionBox.appendChild(question);

    var answerOne = document.createElement("button")
    answerOne.className = "answers";
    answerOne.textContent = questions[9].answerOne;
    question.appendChild(answerOne);

    var answerTwo = document.createElement("button")
    answerTwo.className = "answers";
    answerTwo.textContent = questions[9].answerTwo;
    question.appendChild(answerTwo);

    var answerThree = document.createElement("button")
    answerThree.className = "answers";
    answerThree.textContent = questions[9].answerThree;
    question.appendChild(answerThree);

    var answerFour = document.createElement("button")
    answerFour.className = "answers";
    answerFour.textContent = questions[9].answerFour;
    question.appendChild(answerFour);

    var right = function () {
        alert("Correct, plus 10 points!");
        score += 10;
        console.log(score);
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        final();
    }

    answerOne.addEventListener("click", right);
    answerTwo.addEventListener("click", wrong);
    answerThree.addEventListener("click", wrong);
    answerFour.addEventListener("click", wrong);
}

button.addEventListener("click", startGame);