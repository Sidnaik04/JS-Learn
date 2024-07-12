// Modern Syntax for getter and setter

// using class

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}Sid`;
  }

  set password(value) {
    this._password = value;
  }
}

const Sidhant = new User("sid@apple.com", "xyz");
console.log(Sidhant.password);
console.log(Sidhant.email);
