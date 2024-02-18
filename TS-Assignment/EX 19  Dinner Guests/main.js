// Question 19)
//  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("Answer 19");
// Store the original list of people you'd like to invite to dinner
var guest_List4 = ["Kamran Tessori", "Sir Ziya", "Daniyal Negoori"];
// Print the number of people being invited to dinner
console.log("\nNumber of people invited to dinner: ".concat(guest_List4.length));
// Print the original invitation messages
for (var i = 0; i < guest_List4.length; i++) {
    console.log("Dear Mr. " + guest_List4[i] + ",\n\nI will be very happy if you will come in my home.\n\nThank you! \n\n");
}
// Print a message saying that only two people can be invited for dinner
console.log("\nUnfortunately, we can only invite two people.");
// Remove guests from the list until only two names remain
while (guest_List4.length > 2) {
    var removedGuest = guest_List4.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to my home."));
}
// Print messages to the two people still on the list
console.log("\nInvitations to remaining guests:");
for (var _i = 0, guest_List4_1 = guest_List4; _i < guest_List4_1.length; _i++) {
    var guest = guest_List4_1[_i];
    console.log("Dear ".concat(guest, ", you are still invited to my home! Please join us for a wonderful evening."));
}
// Remove the last two names from the list
guest_List4.pop();
guest_List4.pop();
// Print the final list to ensure it's emptb
console.log("\nFinal guest list:", guest_List4);
