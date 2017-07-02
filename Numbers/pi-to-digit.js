/*jshint esversion: 6 */

/*Used elements*/
var header = document.getElementById('h1_if_needed');
var textbox = document.getElementById('textbox_if_needed');
var button = document.getElementById('button_if_needed');
var paragraph = document.getElementById('p_if_needed');


header.innerHTML = "Enter how many digits you want to view pi to. Example: to get 3.14, enter 2. NOTE: Only enter whole numbers between 1 and 20!";
const PI = Math.PI;

button.onclick = function(){
  var textboxVal = textbox.value;
  var numDecimals = (!Number.isNaN(textboxVal) && textboxVal % 1 === 0) ? textboxVal : 0;

  if (numDecimals >= 1 && numDecimals <= 20){
    paragraph.innerHTML = "Pi to " + numDecimals + " digits: " + PI.toFixed(numDecimals);
  }else{
    alert('Please enter a valid number!');
    textbox.value = '';
  }
};



/*This micro-app allows a user to get pi to a specified number of digits, and excludes all values non-integer or not between 1 and 20*/
