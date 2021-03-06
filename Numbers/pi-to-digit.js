/*jshint esversion: 6 */

/*Used elements*/
var header = document.getElementById('h1_if_needed');
var textbox = document.getElementById('textbox_if_needed');
var button = document.getElementById('button_if_needed');
var paragraph = document.getElementById('p_if_needed');

//Set header instructions
header.innerHTML = "Enter how many digits you want to view pi to. Example: to get 3.14, enter 2. NOTE: Only enter whole numbers between 1 and 20!";
const PI = Math.PI;


//Button click event
button.onclick = function(){
  //Set textbox value (user-specified) and validate user entry
  var textboxVal = textbox.value;
  var numDecimals = (!Number.isNaN(textboxVal) && Number.isInteger(Number(textboxVal))) ? textboxVal : 0;

  //If an appropriate number is given, print Pi to the number of digits specified inside the paragraph tag.
  //Alert user if invalid value is entered and clear the textbox.
  if (numDecimals >= 1 && numDecimals <= 20){
    paragraph.innerHTML = "Pi to " + numDecimals + " digits: " + PI.toFixed(numDecimals);
  }else{
    alert('Please enter a valid number!');
    textbox.value = '';
  }
};



/*This micro-app allows a user to get pi to a specified number of digits, and excludes all values non-integer or not between 1 and 20*/
