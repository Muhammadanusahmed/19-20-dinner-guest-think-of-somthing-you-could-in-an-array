// Question19: dinner guests

let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
console.log(`I am inviting ${guests.length} people to dinner.`);


// Question20: think of somthing you could in an array

let countries: string[] = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:");

countries.forEach((element, index) => {   
    console.log(`${index+1})${element}`);
});


