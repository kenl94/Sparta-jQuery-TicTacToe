$(document).ready(function(){
  // Code goes here

//Variables
  // Target the table
  var $board = $('table');
  // console.log($(board));
// Target the td
  var $boxes = $('td');
  var turns = 0;
  var reset = $('#reset');



  console.log($boxes);

$(reset).click(function(event){
  // console.log(event);
  $boxes.text('');
  $boxes.removeClass();
})


// Click function
$($boxes).click(xos)

  function xos(event){
  if (turns % 2 === 0){
    $(this).text('X').addClass('X');
    // this.addClass('X')
     turns++;
  } else {
    $(this).text('O').addClass('O');
    // this.addClass('O');
    turns++;
    // if (turns === 9){
    //   //   event.stopImediatePropagation;
    //   // }
  }


  console.log(turns);
  // $(this).text('X');
  // $(this).addClass('X');
  // This is that particular box you've clicked
  // console.log(this.attr());
  // This is that particular box you've clicked

//   $boxes.click(function(event){
//     if (turns === 9){
//     event.stopImediatePropagation;
//   }
// })
}


// Remove the div after


// boxes.value



}); // Document Ready Closing
