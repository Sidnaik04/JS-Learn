//Datatypes: Primitive and Non-Primitive

//Primitive:
// 7 Types: Number, String, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 //This is also number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// const bigNumber = 123456789101112n

const id = Symbol('1234')
const anotherId = Symbol('123')

console.log(id === anotherId); //--> Symbol provides uniqueness

//Reference (Non-Primitive):
// Arrays, Objects, Functions

//Array:
const fruits = ["Apple","Banana","Chiku"];
console.log(fruits); // [ 'Apple', 'Banana', 'Chiku' ]

//Objects: --> anything inside curly braces is object
let myObj = {
    name: "Sidhant",
    age: 20,
}
console.log(myObj); //{ name: 'Sidhant', age: 20 }

//Function:
const myFunction = function(){
    console.log("Hello world")
}
console.log(myFunction()); //Hello world

// console.log(typeof fruits); //Object
// console.log(typeof myObj); //Object
// console.log(typeof myFunction); //Funtion Object

//Primitive --> Stack memory, Non-Primitive --> Heap memory


// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.