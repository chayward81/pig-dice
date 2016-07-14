function Player(currentScore, totalScore, turnStatus) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
  this.turnStatus = turnStatus;
}

Player.prototype.rollDice = function() {
  var rollTurn = Math.floor(Math.random() * 6) + 1;
  if (rollTurn === 1) {
    this.currentScore = 0;
    this.totalScore = 0;
    this.turnStatus = false;
  } else {
    this.currentScore += rollTurn;
    this.totalScore += this.currentScore;
  }
}

$(document).ready(function() {
  var player1 = new Player(0, 0, true);
  var player2 = new Player(0, 0 , false);

  $("#playerOnePlay").click(function(event) {
    player1.rollDice();
    if(player1.turnStatus === true) {
      $("#playerOneCurrent").text(player1.currentScore);
      $("#playerOneTotal").text(player1.totalScore);
    } else {
      $("#playerTwoPlay").click(function(event) {
        player2.rollDice();
        $("#playerTwoCurrent").text(player2.currentScore);
        $("#playerTwoTotal").text(player2.totalScore);
      });
    }
  });
});
