const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const sum = students.reduce((acc, student) => {
    return acc + student.score
  }, 0)
  const averageScore = sum / students.length
    return averageScore
}
const average = getAverageStudentScore(students)
console.log(average)

// getAverageStudentScore(students); // Output: 87.5
