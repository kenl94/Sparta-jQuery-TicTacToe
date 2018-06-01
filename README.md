# Sparta Tic Tac Toe Lab

## Description
The goal of the lab/homework was to create a functioning tic tac toe game.

# Installation
To download the file, you can download the files via a zip file or through cloning the repo to your local system through SSH Key or HTTPS

# Challenges
I found making sure the players stop after 9 turns difficult, because if it doesn't stop after 9 turns you can override your initial turn, I've also found making the win conditions difficult.
When I press a box that already has a X or O in it, It doesn't style anymore afterwards.

During this however I have improved on my knowledge of functions, as creating functions wasn't my strong point initially but I am able to understand them better as I am getting practice using them with the DOM.

I am getting better with trouble shooting my own code, as I am now more confident in using console.log() to trouble shoot my work and find out if the element I am choosing is correct as it will tell me in the chrome developer console.
As seen with me later being able to grab a hold of the reset button and making sure it works as I wanted it to.

# Code Snippet
```
$($boxes).click(xos)

  function xos(event){
  if (turns % 2 === 0){
    $(this).text('X').addClass('X');
     turns++;
  } else {
    $(this).text('O').addClass('O');
    turns++;

  }

```
