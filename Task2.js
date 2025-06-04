// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  {
    title: "Mechanics",
    author: "Hafizur",
    year: 2015,
  },
  {
    title: "Nuclear and Particle Physics",
    author: "B.Raha",
    year: 2010,
  },
  {
    title: "Fundamental of Mathematics",
    author: "Hafizur",
    year: 2015,
  },
  {
    title: "Electricity and Magnetism",
    author: "Tapon",
    year: 2015,
  },
];

function getBookTitles(bookArray) {
  return bookArray.map((book) => book.title);
}

const result = getBookTitles(books);
console.log(result);
