var button = document.querySelector("#button");
var startingText = document.querySelector(".starting-text");
var welcomeText = document.querySelector(".welcome-text");

var startGame = function() {
    startingText.remove();
    button.remove();
    welcomeText.remove();
}

button.addEventListener("click", startGame);