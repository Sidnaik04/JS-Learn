function setUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const userOne = new createUser("Boi", "boi@gmail.com", "12345");

console.log(userOne);

// call keyword is used to call other function into current context/function
