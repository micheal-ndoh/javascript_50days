let y = Math.floor(Math.random() * 10) + 1;
let guess = 0;
let tries = 3;

for (let i = 0; i < tries; i++) {
    let x = parseInt(prompt("Guess a number between 1 and 10"));
    guess++;

    if (x === y) {
        console.log("Congrats you got it in " + guess + " tries");
        break;
    } else if (x > y) {
        console.log("Failed try  a smaller number");
    } else if (x < y) {
        console.log("Failed try  a larger number");
    }

    if (i === tries - 1) {
        console.log("Sorry you lost the number was " + y);
    }
}