function calculator(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            console.log("Invalid operation");
    }
}

console.log(calculator(2, 3, "add"));
console.log(calculator(4, 12, "subtract"));
console.log(calculator(5, 2, "multiply"));
console.log(calculator(10, 2, "divide"));
console.log(calculator(2, 3, "modulo"));