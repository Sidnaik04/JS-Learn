// Q. For SDE level 2 and 3
/* 
    Can you change Math.Pi value to any other value? if no , than why?
==> We cannot change the value of the Math.Pi, because its properties like writeable, enumerable and configurable are hardcoded in C++ to false. we can check this using getOwnPropertyDescriptor.
*/

// Here Math is object and PI is property. we are getting description of PI
const Pi = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(Pi);
/* {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

const user = {
  name: "Sidhant",
  age: "20",
  isLoggedIn: true,

  welcomeMessage: function () {
    console.log("Hello user");
  },
};

let username = Object.getOwnPropertyDescriptor(user, "name");

console.log(username);

//to define the property
username = Object.defineProperty(user, "name", {
  // writable: false,
  enumerable: false,
});

username = Object.getOwnPropertyDescriptor(user, "name");
console.log(username);

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
    //name is not printed in for loop, because enumerable propety is false
  }
}
