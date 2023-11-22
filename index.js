/* Objectives
Create variable declarations using both let and const.
Apply different types of data literals.
Use arithmetic operators to manipulate data.
Use comparison operators to compare data.
Perform string concatenations.
Implement escape sequences in strings for special characters.
Use template literals for string interpolation and multi-line strings.
Create effective documentation through the use of comments. */


// Using let 
let myVariable = "Hello";

// Using const
const aa =3.13;

// String literal
let myString = 'This is a string';

// Numeric literal
let myNumber = 42;

// Boolean literal
let isTrue = true;

// Array literal
let myArray = [1, 2, 3];

// Object literal
let myObject = { key: 'value' };


// Arithemtic Operators 

let x = 5;
let y = 10;

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;
console.log(sum);
console.log(difference);
console.log(product);
console.log(remainder);

let a = 5;
let b = '5';

console.log(a == b); // loose equality (true)
console.log(a === b); // strict equality (false)
console.log(a !== b); // strict inequality (true)
console.log(a > b); // greater than (false)
console.log(a < b); // less than (false)


// String concatenations
let firstName = "Junu";
let lastName ="Gurung";
let fullName = firstName +" "+lastName;
console.log(fullName); // Junu Gurung


// Escape sequences
let stringWithEscape = "This is a line with a \n new line.";
console.log(stringWithEscape);

// Template literals
let name = "Vinay";
let age = 33;

let greeting = `Hello my name is ${name} and I am ${age} years old.`;
console.log(greeting);


// Comments for Documents
// This is a single-line comment

/*
  This is a multi-line comment
  that provides more detailed information
  about the code.
*/

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all the numbers are divisible by 5
const allDivisibleBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5== 0;

// Check if the first number is larger than the last
const isFirstLarger = n1 > n4;

//  Arithmetic chain:
const arithmeticResult = ((n1-n2)*n3)% n4;

// Check if any number is over 25 without using the NOT operator
const isOver25WithoutNot = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnderOrEqualTo25 = !isOver25WithoutNot;

// Rename the variable for clarity
const isNotOver25 = isUnderOrEqualTo25;

const isUnique = n1 !== n2 && n1 !== n3 && n1 !== n4 && n2 !== n3 && n2 !== n4 && n3 !== n4;

const isValid = allDivisibleBy5 && isFirstLarger && isNotOver25 && isUnique;
console.log(isValid);

// Additional outputs for verification
console.log("All numbers divisible by 5:", allDivisibleBy5);
console.log("First number larger than the last:", isFirstLarger);
console.log("Arithmetic chain result:", arithmeticResult);
console.log("Is not over 25:", isNotOver25);


/*
You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
*/

// Constants
const totalDistance = 1500; // in miles
const fuelBudget = 175; // in dollars
const fuelCostPerGallon = 3; // in dollars
const speeds = [55, 60, 75]; // in miles per hour
const efficiencies = [30, 28, 23]; // in miles per gallon

// Function to calculate fuel needed for a given speed
const calculateFuelNeeded = (speed, efficiency) => totalDistance / efficiency;

// Function to calculate trip duration for a given speed
const calculateTripDuration = speed => totalDistance / speed;

// Function to check if the budget is enough for a given speed
const isBudgetEnough = (speed, efficiency) => {
  const fuelNeeded = calculateFuelNeeded(speed, efficiency);
  const fuelExpense = fuelNeeded * fuelCostPerGallon;
  return fuelExpense <= fuelBudget;
};

// Log results for each speed
for (let i = 0; i < speeds.length; i++) {
  const speed = speeds[i];
  const efficiency = efficiencies[i];

  const fuelNeeded = calculateFuelNeeded(speed, efficiency);
  const tripDuration = calculateTripDuration(speed);
  const budgetEnough = isBudgetEnough(speed, efficiency);

  console.log(`Results for ${speed} mph:`);
  console.log(`  Gallons of fuel needed: ${fuelNeeded.toFixed(2)}`);
  console.log(`  Trip duration: ${tripDuration.toFixed(2)} hours`);
  console.log(`  Budget enough: ${budgetEnough}`);
  console.log('------------------------');
}




