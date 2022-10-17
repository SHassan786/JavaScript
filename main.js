/*
For console documentation - mdn console 
- VARIABLES:-
* let - we can reassign values
* const 
- value assigned cannot be changed
- it is necessary to assign value, we cannot initialize as default.

- DATA TYPES:-
* Strings, Numbers, Boolean, null, undefined
* to print data - console.log();
* to know the data type - typeof

- ARRAYS:-
* We are not bounded with any one data type in a particular array.

*/ 



const age = 21;
let name = "Shehryar";
let value = null;

//console.log(`My name is ${name} and my age is ${age}`);

// Arrays

const fruits = new Array(5);

fruits.push('mangos');
fruits.push('banana');

fruits.pop();

fruits.unshift(10);
fruits.unshift(25);

console.log(fruits);

// Dictionary

const person = {
    FirstName:'Shehryar',
    LastName: 'Hassan',
    Age: 21,
    Hobbies: ['Football', 'Coding', 'Travelling', 'Singing'],
    Address: {
        Street: 6,
        HouseNo: 'A180',
        City: 'Karachi'
    }

};
// Extracting info of keys from a dictionary variable
const { FirstName, Age, Address:{Street}} = person;

console.log(`My hobbies are ${person.Hobbies[1]} and ${person.Hobbies[3]}`);
console.log(Street);

// COnditional Statements:
const x = 10;

if (x == 10) {
    console.log("True");
}
// double equals will only see the value, it will not match the data types while triple equal
// signs will match the data types

const y = "10";

if (y === 10) {
    console.log("True");
}
else {
    console.log("False")
}

// Furthur Conditonal Statements

const z = 11
// If I want to assign next variable on the basis of first variable

// if z is greater than 10 then assign red else blue
const color = z > 10 ? 'red' : 'blue'

console.log(color);

// Functions

// To create a function we use a keyword function and then give a name to the function

function divide(n1, n2){
    const ans = n1 / n2
    return ans

}

console.log(divide(10, 2));

//Functions can be simplified in ecMa Script

const divide = (num1, num2) => num1 / num2

console.log(divide(26, 2))

const todoCompleted = todos.filter((todo) => todo.isComplete === 'True').map((todo) => console.log(todo.text))