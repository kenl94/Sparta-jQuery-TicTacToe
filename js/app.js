$(document).ready(function(){
// Code goes here

//Variables
// Target the table
  var $board = $('table');
// Target the td
  var $boxes = $('td');
// Turns counter to switch X and O turns
  var turns = 0;
  var reset = $('#reset');
  var playersTurn = $('h2');
  console.log(playersTurn);


  console.log($boxes);

$(reset).click(resetGame)

function resetGame(event){
$boxes.text('');
$boxes.removeClass();
}


// Click function
$($boxes).click(function (event){
if (turns % 2 === 0){
    $(this).text('X').addClass('X');
     turns++;
     playersTurn.text("It is X's turn");
} else {
    $(this).text('O').addClass('O');
    turns++;
    playersTurn.text("It is O's turn");
}




// Logs out the turns so I can manipulate depending on turns
  console.log(turns);
});

}); // Document Ready Closing
