//Assignment 1: Basic JavaScript
//This assignment will test your understanding of loops and data structures in JavaScript.

/* Instructions *
Create a JavaScript file and name it assignment-1.js. Inside this file:

Create a variable named `numbers` and assign an empty array to it.
Using a for-loop and the Array push() method, insert the numbers 0 to 9 into the array you named numbers.
Test that you used the array push method correctly by console logging the first item in the array.
Console log the last item in the array.

Create another variable named car and assign an empty object to it.
Give the object a property called colour and assign it the value of "black". */



// This function inputs a start and end integer and pushes all the integer between into an array and returns the array into the variable invoking it.
function createIntegerArray(start, end) {
  let array = new Array(); //Create empty array
  let i = start || 0; //Create scoped variable i, defaults to 0 if no custom intiger entered
  let z = end || 9; //Create scoped variable z, defaults to 9 if no custom sintiger entered

  // Loop from start to end and push the index number into array as a intiger
  for (i; i <= z; i++){
    array.push(i);
  }

  //returns the array as the result of the function
  return array;
}

// This function runs upon loading and is self invoking
(function () {

  let car = {color:'black'}; // Create the car object and add a value for the color key
  let color = car.color.split('');
  // Insert text string of object into the getElementById
  stringAnimationLoop('#assignment-1__car', color, 500);

  let numbers = createIntegerArray(); // Return function result into var
  // Insert array into element by converting it into a string
  stringAnimationLoop('#assignment-1__numbers', numbers, 500);
})();
