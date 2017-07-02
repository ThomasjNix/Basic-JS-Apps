/*jshint esversion: 6 */

/*Used elements*/
var header = document.getElementById('h1_if_needed');
var textbox = document.getElementById('textbox_if_needed');
var button = document.getElementById('button_if_needed');
var paragraph = document.getElementById('p_if_needed');

//Set header instructions.
header.innerHTML = "Enter an integer in the textbox and click the button to find a fibonacci sequence of that length. For speed purposes, please use a number between 1 and 1000.";

/*
Find fibonacci sequence by recursively calling findFibonacci and passing in the last two values used.
If the array is empty, 0 is pushed to the array.
If only 0 exists in the array, 1 is pushed to the array.
*/
var findFibonacci = function(iterationCounter, currentSequence, iterations){
  if (iterationCounter === 0){
    //Due to difficulties with asynchronization, this function on its last iteration will print the sequence to the paragraph tag.
    paragraph.innerHTML = "Fibonacci sequence to " + iterations + " places:<br />";
    for (var i = 0; i < currentSequence.length; i++){
      paragraph.innerHTML += (i+1) + ". " + currentSequence[i] + "<br />";
    }
  }else{
    var nextNum;
    if (currentSequence.length === 0){
      nextNum = 0;
    }else if(currentSequence[currentSequence.length - 1] === 0){
      nextNum = 1;
    }else{
      nextNum = currentSequence[currentSequence.length - 2] + currentSequence[currentSequence.length - 1];
    }
    currentSequence.push(nextNum);
    findFibonacci(--iterationCounter, currentSequence, iterations);
  }
};

//Button click event
button.onclick = function(){
  //Set textbox value (user-specified) and validate user entry
  var textboxVal = textbox.value;
  var numPlaces = (!Number.isNaN(textboxVal) && Number.isInteger(Number(textboxVal))) ? textboxVal : 0;

  /*
  If appropriate number, call findFibonacci() with the number given passed as the first and third arguments, and
  an empty array is given as the second argument for use.
  */
  //Alert user if invalid value is entered and clear the textbox.
  if (numPlaces >= 1 && numPlaces <=1000){
    var startSequence = [];
    findFibonacci(numPlaces, startSequence, numPlaces);
  }else{
    alert('Please enter a valid number!');
    textbox.value = '';
  }
};


/*This micro-app finds the fibonacci sequence to a user-specified number of places, a classic example of recursion.*/
