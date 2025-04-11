// for loop
for (let i = 0; i <= 5; i++) {
    console.log(`Countdown: ${i}`);
}

console.log();

// while loop
let i = 5;
while (i > 0) {
    console.log(`Countdown: ${i}`);
    i--;
}

console.log();
// do...while loop (guarantees at least one run)
let j = 5;
do {
    console.log(`Countdown: ${j}`);
    j--;
} while (j > 0);

console.log();

const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
    console.log(fruit); // values
}
console.log();
for (const index in fruits) {
    console.log(index); // indexes
}
console.log();
for (const [index, fruit] of fruits.entries()) {
    console.log(index, fruit); // both
}
console.log();
console.log();
console.log();
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});

console.log();

const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 21 }
];

for (const student of students) {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
}

console.log();


// greet students

const student = ["Alice", "Bob", "Charlie"];
student.forEach(name => console.log(`Hello, ${name}!`));


console.log();

// Declaration
function sayHello(name) {
    return `Hello, ${name}`;
}

// Expression
const greet = function (name) {
    return `Hi, ${name}`;
};
