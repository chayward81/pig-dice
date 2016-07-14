function Player(currentScore, totalScore, turnStatus) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
  this.turnStatus = turnStatus;
}

Player.prototype.rollDice = function() {
  return Math.floor(Math.random() * 6) + 1;
}

var turnScore = function(currentScore) {
  if(currentScore === 1) {
    player1.turnStatus = false;
    player2.turnStatus = true; 
  }
}

var player1 = new Player(0, 0, "True");
var player2 = new Player(0, 0 , "False");

$(document).ready(function() {

  $("#playerOnePlay").click(function(event) {
    var currentTurn = player1.rollDice();
    $("#playerOneScore").text(currentTurn);
  });

});
