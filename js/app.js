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



  console.log($boxes);

$(reset).click(function(event){
  $boxes.text('');
  $boxes.removeClass();
})


// Click function
$($boxes).click(xos)

  function xos(event){
  if (turns % 2 === 0){
    $(this).text('X').addClass('X');
     turns++;
  } else {
    $(this).text('O').addClass('O');
    turns++;
  }


  console.log(turns);


}); // Document Ready Closing
