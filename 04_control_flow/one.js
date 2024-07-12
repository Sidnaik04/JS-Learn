// if, else, else-if statement

let temperature = 27;

if (temperature < 30) {
  console.log("Moderate Temperature");
} else {
  console.log("Hot temperature");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200;

if (score >= 100) {
  const power = "fly";
  console.log(`New power: ${power} unlocked`);
}
// console.log(`New power: ${power} unlocked`); --> error due to out of scope

const balance = 1000;

if (balance < 500) {
  console.log("Balance is less than 500");
} else if (balance < 750) {
  console.log("Balance is less than 750");
} else if (balance < 900) {
  console.log("Balance is less than 900");
} else {
  console.log("Balance is less than 1200");
}

if (true) console.log("Hello world");

const isLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isLoggedIn && debitCard) {
  console.log("You can Buy");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User Logged In");
}
