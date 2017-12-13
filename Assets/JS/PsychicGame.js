var guesses = 15;
var wins = 0;
var losses = 0;
var computer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  var computerGuess = computer[Math.floor(Math.random()*computer.length)];
  function userWin() {
      wins++;
      document.querySelector(".wins").innerHTML = "Wins: " + wins;
      resetCounter();
      document.querySelector(".letters").innerHTML = " ";
  }
  function userLose() {
      losses++;
      document.querySelector(".losses").innerHTML = "Losses: " + losses;
      resetCounter();
      document.querySelector(".letters").innerHTML = " ";
  }
  function resetCounter() {
      guesses = 15;
      document.querySelector(".guesses-left").innerHTML = "Guesses left: " + guesses;
  }
  if (userGuess === computerGuess) {
      userWin();
  } else {
      guesses--;
      document.querySelector(".guesses-left").innerHTML = "Guesses left: " + guesses;
      document.querySelector(".letters").append(" " + userGuess + ", ");
  }
  if (guesses === 0) {
      userLose();
  }
};
