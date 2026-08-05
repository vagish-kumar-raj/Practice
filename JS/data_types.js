const readline = require("readline");

// ! Data Types
let name = "Vagish";
let age = 18;
let learner = true;

// ! Display Profile Information
console.log("My Info:");
console.log("My name is " + name + ".");
console.log("I am " + age + " years old.");
console.log("Am I a learner? " + learner);
console.log(" ");
console.log("Solve This Riddle:");
console.log("If the radius of the Sun is increased by 1 meter, \nwhat will be difference between its new circumference and older circumference?");
console.log("You might think that its a huge number, but is just 2π meters, which is approx. 6.283 meters.");
console.log("Logic:");
console.log("Let radius(r) of be X(which is 695,700,000 m).");
console.log("New radius(R) = X + 1 m");
console.log("Older circumference = 2πr");
console.log("New circumference = 2πR");
console.log("Difference between circumferences = 2πR - 2πr");
console.log("Difference between circumferences = 2π (R - r)");
console.log("Difference between circumferences = 2π (X + 1 - X)");
console.log("Difference between circumferences = 2π (1)");
console.log("Difference between circumferences = 2π = 2 * 3.14159265... = 6.283... m");
