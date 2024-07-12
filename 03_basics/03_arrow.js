//This keyword : Use for current context (to access variable in the scope)

const user = {
  username: "Sidhant",
  price: 99,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    // console.log(this);
  },
};

user.welcomeMessage();

user.username = "Sid";
user.welcomeMessage();

// console.log(this); --> {} for node environment , for browser version it shows windows gloabal variables.

function chai() {
  let username = "Sidhant";
  console.log(this.username); // undefined
  // console.log(this);
}
// chai()

const myUser = function () {
  let username = "Sidhant";
  console.log(this.username); //undefined
  // console.log(this);
};
myUser();

//Arrow function

const one = () => {
  let username = "Sidhant";
  console.log(this);
  console.log(this.username);
};
one();

// explicit function --> if function uses curly braces than return should be use

const addNum = (num1, num2) => {
  return num1 + num2;
};
console.log(addNum(2, 4));

//implicit function --> without curly braces and return keyword and use of parenthesis (used often for react)

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(2, 4));

const addnum = (num1, num2) => ({ username: "Sidhant" });
console.log(addnum(2, 4));
