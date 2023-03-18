"use strict";
// Declare two variables for the exam scores, e.g., englishMarks and urduMarks, and assign them values.
exports.__esModule = true;
// · Calculate the average of the two exams using the formula: (englishMarks + urduMarks) / 2
// · Use if-else conditionals to determine the student's grade based on the average score.
// · For example, if the average score is greater than or equal to 80, assign grade "A", if it is greater than or equal to 70 and less than 80, assign grade "B", and so on until grade "F" for a score below 60.
// · Display the grade to the user as output.
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Numb1 = prompt('Enter your English Marks:');
var Numb2 = prompt('Enter your Urdu Marks:');
var Num1 = parseInt(Numb1);
var Num2 = parseInt(Numb2);
var average = (Num1 + Num2) / 2;
if (average >= 80) {
    console.log('Your grade is A');
}
else if (average >= 70 && average < 80) {
    console.log('Your grade is B');
}
else if (average >= 60 && average < 70) {
    console.log('your grade is C');
}
else if (average < 60) {
    console.log('your grade is F');
}
