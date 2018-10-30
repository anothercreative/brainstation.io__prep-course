//Assignment 2 : Problem Solving

//Pyramid function
function pyramidConsole(height) {
  height = height || 7;
  let pyramid = new Array(height);

  $.each(pyramid, function (i, value){
    value = "";
    if (i == 0) {
      value += "#\n";
    } else {
      for (let j=0; j <= i; j++) {
        value += "#";
        if (j == i) {
          value += "\n";
        }
      }
    }
    pyramid[i] = value;
  });
  return pyramid;
}

//isEven function
function isNumberEven(n) {
  n = n || 11;
  let isOddOrEven = "odd";

  if ((n % 2 ) == 0) {
    isOddOrEven = "even";
  }

  return{ number: n, isOddOrEven: isOddOrEven };
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
