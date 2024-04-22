// Question19: dinner guests
var guests = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
console.log("I am inviting ".concat(guests.length, " people to dinner."));
// Question20: think of somthing you could in an array
var countries = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:");
countries.forEach(function (element, index) {
    console.log("".concat(index + 1, ")").concat(element));
});
