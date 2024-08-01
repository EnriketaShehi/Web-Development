let userNumber = prompt("Enter a number of at least 3 digits: ");
let arrayNumber = userNumber.split("");
let arrayLength = arrayNumber.length;
let placeTwo = arrayNumber[1];
let placeLast = arrayNumber [(arrayLength - 1)];
let newArrayNumber = new Array();

console.log("You have entered the number : " + userNumber + " .");

for (let i = 0; i < arrayLength; i++) {
    if (i == 1) {
        newArrayNumber.splice(1, 1, placeLast);
    }
    else if (i == (arrayLength - 1)) {
        newArrayNumber.splice((arrayLength - 1), 1, placeTwo);
    }
    else {
        newArrayNumber.splice(i, 1, arrayNumber[i]);
    }
}

let newNumber = newArrayNumber.join("");

console.log("The digits at the second and last positions are swapped.");
console.log("The new number is: " + newNumber + ".");