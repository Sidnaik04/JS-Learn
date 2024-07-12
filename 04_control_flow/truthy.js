// const userEmail = "sid@mail.com"
// const userEmail = ""
const userEmail = [];

if (userEmail) {
  console.log("Logged In");
} else {
  console.log("Not Logged In");
}

//Falsy values ==> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values --> Rest all are truthy values
// Some Examples: "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null and undefined
// Use to handle database error

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator==> condition ? true : false

const age = 17;

age >= 18 ? console.log("Can Drive") : console.log("Cannot Drive");
