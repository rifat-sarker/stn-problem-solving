// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const arr = [
  {
    name: "Rifat",
    age: 25,
  },
  {
    name: "Jony",
    age: 23,
  },
  {
    name: "Akbar",
    age: 20,
  },
  {
    name: "Ahmed",
    age: 21,
  },
];

function updateAge(nameArr, name, age) {
  const person = nameArr.find((p) => p.name === name);
  if (person) {
    person.age = age;
  } else {
    console.log("Name not found");
  }
  return person;
}

const result = updateAge(arr, "Akbar", 30);
console.log(arr);
