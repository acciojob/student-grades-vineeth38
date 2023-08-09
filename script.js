//your JS code here. If required.
const fs = require('fs');
const csv = require('csv-parser');

const students = [];
let totalMarks = 0;
let totalStudents = 0;

fs.createReadStream('students.csv')
  .pipe(csv())
  .on('data', (row) => {
    const marks = parseFloat(row.marks); // Assuming the column containing marks is named "marks"
    if (!isNaN(marks)) {
      totalMarks += marks;
      totalStudents++;
    }
  })
  .on('end', () => {
    if (totalStudents > 0) {
      const averageMarks = totalMarks / totalStudents;
      console.log(`Average marks of all students: ${averageMarks.toFixed(2)}`);
    } else {
      console.log('No valid student data found.');
    }
  });
