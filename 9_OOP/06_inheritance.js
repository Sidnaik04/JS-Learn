class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const userOne = new Teacher("Bro", "bro@bro.com", "1234");

userOne.logMe();
console.log(userOne.addCourse());

const userMain = new User("boi", "boi@gmail.com", "123");
userMain.logMe();

console.log(userOne instanceof User);
