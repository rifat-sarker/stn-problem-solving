// 09.Task: Advanced Sorting
// -Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const students = [
  {
    name: "Rifat",
    grades: [85, 90, 78],
  },
  {
    name: "Fatema",
    grades: [92, 88, 95],
  },
  {
    name: "Tania",
    grades: [70, 75, 80],
  },
  {
    name: "Jony",
    grades: [88, 85, 90],
  },
];

function sortStudentsByAverageGrade(students) {
  return students.sort((a, b) => {
    const averageA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const averageB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return averageB - averageA; 
  });
}
const result = sortStudentsByAverageGrade(students);
console.log(result);
