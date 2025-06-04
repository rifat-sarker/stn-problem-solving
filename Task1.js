// Create an array of objects, each representing a person with properties like person, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const persons = [
  {
    name: "Rifat Sarker",
    age: 25,
    gender: "male",
  },
  {
    name: "Fatema",
    age: 20,
    gender: "female",
  },
  {
    name: "Tania Khan",
    age: 25,
    gender: "female",
  },
  {
    name: "Jony",
    age: 25,
    gender: "male",
  },
];

function filterName(arrayOfPeople) {
  const filterOutFemales = arrayOfPeople.filter(
    (person) => person.gender !== "female"
  );
  const arrOfNames = filterOutFemales.map((person) => person.name);
  return arrOfNames;
}

const result = filterName(persons);
console.log(result);




// // by arrow function and make reusable
// const filterName = (arrayOfPeople) =>
//   arrayOfPeople
//     .filter((person) => person.gender !== "female")
//     .map((person) => person.name);
// const result = filterName(persons);
// console.log(result);




// const result = persons
//   .filter((person) => person.gender !== "female")
//   .map((person) => person.name);
// console.log(result);




// const filterOutFemales = persons.filter((person) => person.gender !== "female");
// const arrOfNames = filterOutFemales.map((person) => person.name);
// console.log(arrOfNames);
