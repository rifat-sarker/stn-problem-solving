// Write a function that determines whether a given year is a leap year.

function getLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
  } else {
    console.log(year + " is not a Leap Year");
  }
}

getLeapYear(2010);
