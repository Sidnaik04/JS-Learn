//ES6 syntax for class

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  //methods
  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const userOne = new User("Naruto", "naruto@konoha.com", "123");
// console.log(userOne);

console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

//before ES6 syntax: (behind the scenes)

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const userTwo = new User("Ichigo", "ichigo@soul.com", "12345");

console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());
