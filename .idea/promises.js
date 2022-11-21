
let myNumber = prompt("What's your number?");
console.log("Your number is: " + myNumber)

console.log(numberRequiresTwoCharsSpace(myNumber))


function numberRequiresTwoCharsSpace (z) {
    return new Promise((resolve, reject) => {
        if (z > 9 || z < 0)
            resolve("2 digits or more!");
        else
            reject("Just one digit!");
    });


}

