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

function numbers(start, end) {
  let i = start || 0;
  let z = end || 9;

  for (i; i <= z; i++){
      /* your code here */
  }

  console.log(/* your code here */);
}

(function () {
  let car = new Object();

  car.colour = 'black';

  console.log (car.colour);
})();

numbers();
