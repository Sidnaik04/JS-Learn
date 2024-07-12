// for of loop
// whenever array comes use for of loop

const numbers = [1, 2, 3, 4, 5];

for (const i of numbers) {
  console.log(i);
}

const greetings = "Hello world";

for (const greet of greetings) {
  console.log(`The character is: ${greet}`);
}

//Maps ==> key and values
// (Read about maps): used to hold unique elements

const map = new Map();
map.set("IN", "India");
map.set("JPN", "Japan");
map.set("FR", "France");
map.set("SGP", "Singapore");

//Destructing of map
for (const [key, value] of map) {
  console.log(`${key} => ${value}`);
}

myObj = {
  game1: "RDR2",
  game2: "GOWR",
};

// for(const [key,value] of myObj){
//     console.log(`${key} => ${value}`);
// }
//for of doesnt work on object
