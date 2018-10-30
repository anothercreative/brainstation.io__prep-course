//Assignment 2 : Problem Solving

//Pyramid function
function pyramidConsole(height) {
  height = height || 7; //Can input custom height or defaults to 7
  let pyramid = new Array(height); //Creates and empty array with a length of the inputted value

  $.each(pyramid, function (i, value){ //Create a function for each array item
    value = ""; //sets an empty value to turn value into string
    if (i == 0) { //if its the first array value
      value += "#\n"; //put a # and a json line break
    } else { //Otherwsie
      for (let j=0; j <= i; j++) { //Run a loop for each time a function is run
        value += "#"; //Add a hash to the previous iteration of the variable
        if (j == i) { //If its the last iteration
          value += "\n"; //Add a break
        }
      }
    }
    pyramid[i] = value; //Set the value to the specific iteration of the array
  });
  return pyramid; //Return the entire array
}

//isEven function
function isNumberEven(n) { // Allow for a custom valueto be inputted
  n = n || 11; //If no value inputted default to 11
  let isOddOrEven = "odd"; //defaul is odd

  if ((n % 2 ) == 0) { //If there is no remainder is it an even number
    isOddOrEven = "even"; //Set to even
  }

  return{ number: n, isOddOrEven: isOddOrEven }; //return answers as an object
}

//Autorun function
(function () {
  let pyramid = pyramidConsole();
  let pyramidString = pyramid.join("");

  stringAnimationLoop('#assignment-2__pyramid', pyramid, 500);
  console.log(pyramid);
  console.log(pyramidString);

  let numbers = isNumberEven();
  console.log(numbers);
  console.log("The number is "+ numbers.number + ", and it is " + numbers.isOddOrEven)
  stringAnimationLoop('#assignment-2__numbers', numbers, 500);
})();
