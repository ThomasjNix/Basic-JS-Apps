/*jshint esversion: 6 */

/*Used elements*/
var header = document.getElementById('h1_if_needed');
var textbox = document.getElementById('textbox_if_needed');
var button = document.getElementById('button_if_needed');
var paragraph = document.getElementById('p_if_needed');

//Set header instructions
header.innerHTML = "Enter a list of numbers seperated by single spaces to have them sorted with bubble sort. Please start the entry with a number. Please use at least two numbers (decimals are allowed).";

/*
  This is the sorting algorithm, it finds the minimum number and places it at the beginning of the array.
  Afterwards it moves to the next index of the array and repeats, never changing the index prior.
  This ensures the next minimum is always at the next index, leaving the maximum at the last index.
*/
var selectionSort = function(list, minInVal){
  for (var i = 0; i < list.length; i++){
    var minVal = minInVal;
    for (var j = i; j < list.length; j++){
      if (list[j] < minVal){
        minVal = list[j];
      }
      /*
      Uncomment this section if you want to see the sort working in action
      console.log("Iteration: " + i + "\tInner iteration: " + j + "\tCurrent min: " + minVal + "\n");
      console.log("\t\tArray:" + list);
      */
    }

    var indexOfMin = list.indexOf(minVal);
    var tempHold = list[i];
    list[i] = list[indexOfMin];
    list[indexOfMin] = tempHold;
  }
};


//Button click event
button.onclick = function(){
  //Set textbox value (user-specified) and validate user entry
  var textboxVal = textbox.value;
  var validText = true;

  /*
  Making sure the list is acceptable, removing excessive white space and
  replacing multiple spaces between entries with a single space,
  then delimiting with spaces to form an array.

  The maximum value is stored for later use in the sorting algorithm.
  */
  var list = textboxVal.replace(/  +/g, ' ').trim().split(' ');
  var maxVal = 0;
  for (var i = 0; i < list.length; i++){
    if (isNaN(list[i])){
      validText = false;
    }else{
      list[i] = Number(list[i]);
      if (list[i] > maxVal){
        maxVal = list[i];
      }
    }
  }

  //Running the selection sort if the conditions allow, printing to the paragraph tag once complete.
  //Otherwise alerting that there was an invalid entry and clearing the textbox.
  if (validText){
    selectionSort(list, maxVal);
    paragraph.innerHTML = "Selection sorted list: ";
    for (var listItem = 0; listItem < list.length; listItem++){
      paragraph.innerHTML += (list[listItem] + ((listItem === list.length - 1) ? "" : ", "));
    }
  }else{
    alert('Please enter a valid sequence of numbers!');
    textbox.value = '';
  }
};
