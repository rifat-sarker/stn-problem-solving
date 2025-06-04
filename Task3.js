// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

function squareNumber(number) {
  return number * number;
}

const result1 = squareNumber(5);
// console.log(result1);

function doubleNumber(number) {
  return number + number;
}

const result2 = doubleNumber(5);
// console.log(result2);

function addFive(number) {
  return number + 5;
}

const result3 = addFive(5);
// console.log(result3);

function getFinalResult(number) {
  const squared = squareNumber(number);
  const doubled = doubleNumber(squared);
  const finalResult = addFive(doubled);
  return finalResult;
}

const result = getFinalResult(3);
console.log(result);
