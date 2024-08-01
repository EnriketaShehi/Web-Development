let litresofWater = prompt("How many litres of water have you used? ");

let cost1 = 15.73;
let cost2 = 22.38;
let cost3 = 31.77;
let cost4 = 69.76;

let kilolitresOfWater = Number(litresofWater)/1000;
if (kilolitresOfWater == 0) {
    let charge1 = (kilolitresOfWater * cost1);
    let totalCharge = charge1.toFixed(2);
    console.log("You need to pay R" + totalCharge + "."); 
}

else if ((kilolitresOfWater > 0) && (kilolitresOfWater <=6.0)) {
    let charge1 = (kilolitresOfWater * cost1);
    let totalCharge = charge1.toFixed(2);
    console.log("You need to pay R" + totalCharge + "."); 
}

else if ((kilolitresOfWater > 6.0) && (kilolitresOfWater <=10.5)) {
    let charge1 = (6.0 * cost1);
    let charge2 = ((kilolitresOfWater - 6.0) * cost2);
    let totalCharge = (charge1 + charge2).toFixed(2);
    console.log("You need to pay R" + totalCharge + "."); 
}

else if ((kilolitresOfWater > 10.5) && (kilolitresOfWater <=35)) {
    let charge1 = (6.0 * cost1); 
    let charge2 = ((10.5 - 6.0) * cost2);
    let charge3 = ((kilolitresOfWater - 10.5) * cost3);
    let totalCharge = (charge1 + charge2 + charge3).toFixed(2);
    console.log("You need to pay R" + totalCharge + "."); 
}

else if (kilolitresOfWater > 35.0) {
    let charge1 = (6.0 * cost1); 
    let charge2 = ((10.5 - 6.0) * cost2);
    let charge3 = ((35.0 - 10.5) * cost3);
    let charge4 = ((kilolitresOfWater - 35.0) * cost4);
    let totalCharge = (charge1 + charge2 + charge3 + charge4).toFixed(2);
    console.log("You need to pay R" + totalCharge + "."); 
}

else {
    console.log("You don't have a valid amount of water.")
    console.log("Please rerun the program.")
}