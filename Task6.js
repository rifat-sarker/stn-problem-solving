// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getSumOfEvenNum(numberArr) {
  return numberArr.reduce((acc, curr) => {
    return curr % 2 === 0 ? acc + curr : acc;
  }, 0);
}

const result = getSumOfEvenNum(numbers);
console.log(result);
