function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


console.log(fibonacci(9))

console.log();
console.log();


function printNumbers(n) {
    let start = n;
    let end = 20;

    for (let number = start; number <= end; number++) {
        console.log(number);
    }
}


printNumbers(0);

console.log()
console.log()
console.log()
console.log()





function countLetters(input) {
    if (typeof input !== "string") {
        return "Invalid input!";
    }

    let count = 0;
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char.match(/[a-zA-Z]/)) {
            count++;
        }
    }

    return count;
}


console.log(countLetters("Hello123 "));
console.log(countLetters("123!@#"));
console.log(countLetters("Hi there!"));




let calculator = {

    add: function (a, b) {
        const result = a + b;
        return result

    },

    subtract: function (a, b) {

        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: (a, b) => a / b
};

let errorMessage = "Invalid input!";

if (typeof calculator.add !== "function") {
    console.log(errorMessage);
}



console.log(calculator.add(2, 3));
console.log(calculator.add(4, 12));
console.log(calculator.subtract(5, 2));
console.log(calculator.multiply(4, 6));
console.log(calculator.divide(10, 2));


