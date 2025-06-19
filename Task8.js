// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.


const arr = [2,3,4,4,4,6,5,4,3,29]

function getUniqueNumber (numArr){
  return numArr.reduce((acc,curr)=> acc !== curr)
}

const result = getUniqueNumber(arr)
console.log(result);