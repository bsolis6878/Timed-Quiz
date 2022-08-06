var button = document.querySelector("#button");
var startingText = document.querySelector(".starting-text");
var welcomeText = document.querySelector(".welcome-text");
var questionBox = document.querySelector(".starting");

var score = 0;
var questions


var startGame = function() {
    startingText.remove();
    button.remove();

    startQuiz();

    var timeLeft = 5;
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
}

var startQuiz = function() {

}

button.addEventListener("click", startGame);