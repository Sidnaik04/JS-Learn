// Object Literals

const user = {
  username: "Sidhant",
  age: 20,
  isLoggedIn: true,
  userDetails: function () {
    console.log("User Details");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user.userDetails());
console.log(this);

//Constructor Function
function User(username, age, isLoggedIn) {
  this.username = username;
  this.age = age;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("Sidhant", 20, true);
const userTwo = new User("Boi", 20, false);

console.log(userOne.constructor);
console.log(userTwo);

//InstanceOf: Read
