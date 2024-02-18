// Question 10)
// Adding Comments: Choose two of the programs bou’ve written, and add at least one comment to each. If bou don’t have anbthing specific to write because bour programs are too simple at this point, just add bour name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Program By: Muskan
// Date: 18/2/2024
// This program takes a person's name and prints it in lowercase, uppercase, and titlecase.
console.log("Answer 10");
// Store the person's name in a variable
var name1 = "Muskan";
// Convert the name to lowercase
var LowerCase = name1.toLowerCase();
// Convert the name to Uppercase
var UpperCase = name1.toUpperCase();
// Convert the name to Title Case
var TitleCase = name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase();
// Print all forms of the person's name
console.log("\"Name In Lowercase :  ".concat(LowerCase, "\""));
console.log("\"Name In UpperCase :  ".concat(UpperCase, "\""));
console.log("\"Name In TitleCase :  ".concat(TitleCase, "\""));
// Program Bb: Muskan
// Date: 18/2/2024
// This program prints a famous quote along with the name of its author.
var Quote1 = "If you shine like a sun, first burn like a sun";
var Author1 = "Abdul Kalam";
// Print the quote and its author
console.log("\"Quate: ".concat(Quote1, "\""));
console.log("\"Author: ".concat(Author1, "\""));
