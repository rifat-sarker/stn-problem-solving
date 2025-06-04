// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  {
    make: "Rolls-Royce",
    model: "Phantom",
    year: 2019,
  },
  {
    make: "Rolls-Royce",
    model: "Ghost",
    year: 2021,
  },
  {
    make: "Toyota",
    model: "Supra",
    year: 2020,
  },
  {
    make: "Toyota",
    model: "Supra MK4",
    year: 1998,
  },
  {
    make: "BMW",
    model: "M3",
    year: 2018,
  },
  {
    make: "BMW",
    model: "X5",
    year: 2022,
  },
];

function sortCarByYear(carArr) {
  const sortedArray = carArr.sort((a, b) => a.year - b.year);
  return sortedArray;
}
const result = sortCarByYear(cars);
console.log(result);
