/*
For reference, I wholeheartedly understand that bubble sort is awful due to the worst-case performance of O(n^2).
I am not writing this for the purpose of actually using it, ever, but more so just to show that I know what it is and how it works.
*/

var header = document.getElementById('h1_if_needed');
var textbox = document.getElementById('textbox_if_needed');
var button = document.getElementById('button_if_needed');
var paragraph = document.getElementById('p_if_needed');

//Set header instructions
header.innerHTML = "Enter a list of numbers seperated by single spaces to have them sorted with bubble sort. Please start the entry with a number. Please use at least two numbers (decimals are allowed).";

//Bubble sort function, compares each number to the next in the array, swaps them if need be.
var bubbleSort = function(list){
  for (var i = 0; i < list.length - 1; i++){
    for (var j = 0; j < list.length - i - 1; j++){
      if (list[j] > list[j+1]){
        var tempHold = list[j];
        list[j] = list[j+1];
        list[j+1] = tempHold;
      }
    }
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
  */
  var list = textboxVal.replace(/  +/g, ' ').trim().split(' ');
  for (var i = 0; i < list.length; i++){
    if (isNaN(list[i])){
      validText = false;
    }else{
      list[i] = Number(list[i]);
    }
  }

  //Running the bubble sort if the conditions allow, printing to the paragraph tag once complete.
  //Otherwise alerting that there was an invalid entry and clearing the textbox.
  if (validText){
    bubbleSort(list);
    paragraph.innerHTML = "Bubble sorted list: ";
    for (var listItem = 0; listItem < list.length; listItem++){
      paragraph.innerHTML += (list[listItem] + ((listItem === list.length - 1) ? "" : ", "));
    }
  }else{
    alert('Please enter a valid sequence of numbers!');
    textbox.value = '';
  }
};


/*
This is a bubble sort micro-app, one of the worst possible sorting methods to actually ever use.
But as previously explained, it's just for proof of concept.
*/
