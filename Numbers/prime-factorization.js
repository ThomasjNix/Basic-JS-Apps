/*jshint esversion: 6 */

/*Used elements*/
var header = document.getElementById('h1_if_needed');
var textbox = document.getElementById('textbox_if_needed');
var button = document.getElementById('button_if_needed');
var paragraph = document.getElementById('p_if_needed');

//Set header instructions
header.innerHTML = "Enter a number (greated than 0) to find all prime numbers below it";

//Array prototype to check if value is already in the array
Array.prototype.includes = function(check, allowImplicitCoercion){
  for (var i = 0; i < this.length; i++){
    if (allowImplicitCoercion){
      if (this[i] == check){
        return true;
      }else{
        return false;
      }
    }else{
      if (this[i] === check){
        return true;
      }else{
        return false;
      }
    }
  }
};

//Number prototype to check if a number is prime
//Added safety check for decimals just in case
Number.prototype.isPrime = function(){
  var primeBool = true;
  for (var i = 2; i < this; i++){
    if (this % i === 0 || !Number.isInteger(Number(this))){
      primeBool = false;
    }
  }
  return primeBool;
};

//Find all prime factors by checking if a number is both a factor of the original and prime
var findPrimes = function(num, list){
  var originalNum = num;
  while (num > 1){
    if (originalNum % num === 0){
      if (num.isPrime()){
        if (!list.includes(num)){
          list.push(num);
        }
      }
    }
    --num;
  }
  //Finally print to the paragraph element all of the prime numbers
  paragraph.innerHTML = "Prime factors of " + originalNum + ": ";
  for (var j = 0; j < list.length; j++){
    paragraph.innerHTML += "<br>" + (j + 1) + ". " + list[list.length - 1 - j];
  }
};

//Button click event
button.onclick = function(){
  //Set textbox value (user-specified) and validate user entry
  var textboxVal = textbox.value;
  var numToFind = (!Number.isNaN(textboxVal) && Number.isInteger(Number(textboxVal))) ? textboxVal : 0;

  //Call findPrimes method given that the number is greater than 2, pass an empty array for use.
  //Alert user if invalid value is entered and clear the textbox.
  if (numToFind >=1){
    var startingList = [];
    findPrimes(Number(numToFind), startingList);
  }else{
    alert('Please enter a valid number!');
    textbox.value = '';
  }
};


/*This is a micro-app that finds all of the prime factors under a user-specified number. Though I did consider using recursion for this, it seemed to add unnecessary complexity to the code.*/
