var c = 300; //--> value which is accesible to everyone in program is known as global variable
let d = 400;

//value inside {} is known as block variables only accessible inside block
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  let d = 40;

  console.log("Inner: ", d);
}

// console.log(a); --> this will error as value is defined inside scope
// console.log(b); --> this will error as value is defined inside scope
console.log(c); //--> but var don't give error which is not good, hence we don't use var
console.log(d);

//Nested Scope

function one() {
  const username = "Sidhant";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}
one();

if (true) {
  const username = "Sidhant";

  if (username === "Sidhant") {
    const website = " youtube";

    console.log(username + website);
  }
  // console.log(website);
}
console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5)); // calling this will have no problem
//regular funtion
function addOne(num) {
  return num + 1;
}

// addTwo(5) // calling this will create a error
//function stored in variable
const myFunction = function addTwo(num) {
  return num + 2;
};
console.log(myFunction(5));
