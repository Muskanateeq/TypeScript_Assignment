//  Question 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log('\nAnswer 12\n');
var names_info = ["Shahzad", "Aliyan", "Shahzaib", "Kashaf"];
var message = "I hope you are a great well:  ";
for (var i = 0; i < names_info.length; i++) {
    console.log(message + names_info[i]);
}
