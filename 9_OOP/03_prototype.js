let myHeros = ["thor", "hulk"];

let herosPower = {
  thor: "hammer",
  hulk: "Punch",

  getThorPower: function () {
    console.log(`Thor power is: ${this.thor}`);
  },
};

Object.prototype.Sidhant = function () {
  console.log("Sidhant has all power");
};

Array.prototype.SayHello = function () {
  console.log("Hello");
};

herosPower.Sidhant(); //Sidhant has all power
myHeros.Sidhant(); //Sidhant has all power

myHeros.SayHello(); //Hello
// herosPower.SayHello(); //Error

//Inheritance:

const user = {
  username: "Boi",
  email: "boi@gpt.com",
};

const Teacher = {
  makeVide: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  //old syntax: to inherit
  __proto__: TeachingSupport,
};

Teacher.__proto__ = user;

//Modern Syntax: to inhert
Object.getPrototypeOf(TeachingSupport, Teacher);

//Problem:
// let myName = "sidhant     "
// console.log(myName.length); returns 12 as length. Create a function .trueLength -> that returns the true length of string. Using prototype

let userName = "Sidhant     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length: ${this.trim().length}`);
};

userName.trueLength();
"Boi".trueLength();
