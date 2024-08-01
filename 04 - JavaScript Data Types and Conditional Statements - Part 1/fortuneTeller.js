console.log("Hi there! I am going to predict your future.");

let motherFirstName = prompt("Give your mother's first name: ");
let streetName = prompt("Give street name: ");
let favouriteColour = prompt("Give your favourite colour as a child: ");
let currentAge = prompt("Give your current age: ");
let numberBetween1And10 = prompt("Give a number between 1 and 10: ");

let bestFriend = motherFirstName  + " "  + streetName;
let yearOfMarriage = Number(currentAge)  + Number(numberBetween1And10);
let howManyChildren = (Number(currentAge)) % (Number(numberBetween1And10));
let whenTheyDyeTheirHair = Math.round((Number(currentAge)) / (Number(numberBetween1And10)));

let outputResults = `In ${numberBetween1And10} years you are going to meet your best friend named ${bestFriend}.
You will get maarried in ${yearOfMarriage} years and have ${howManyChildren} children.
In ${whenTheyDyeTheirHair} years you are going to dye your hair ${favouriteColour}.`;

console.log(outputResults);
