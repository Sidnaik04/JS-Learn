//Objects Creation

//Singleton --> if objects are made using constructors 
// Object.create() //Singleton Method --> will learn later


//Object literals
// Object has key: value 

const mySym = Symbol("key1")

const JsUser = {
    name: "Sidhant",
    "fullName": "Sidhant Naik", //--> This cannot be accessed using dot method
    age: 20,
    location: "Goa",
    email: "sidnaik04@google.com",
    isLoggedIn: true,
    lastLoggedIn: ["Monday","Saturday"],
    [mySym]: "myKey", //Syntax for symbol, canot declare directly, first outside than inside the object
}

//Access Object:
console.log(JsUser.age); // Can use but not a good practice because --> "fullName": "Sidhant Naik" --> cannot be accessed using dot method
console.log(JsUser["name"]); //This is good practice --> but both the methods should be known
console.log(JsUser["fullName"]);
console.log(JsUser["lastLoggedIn"]);
console.log(JsUser[mySym]);

//change the value:
JsUser.email = "sidnaik04@chatGpt.com"

//freeze the value, so that it cannot be changed
Object.freeze(JsUser)
JsUser.email = "sidnaik04@microsoft.com"

console.log(JsUser);


//function in objects
JsUser.greeting = function(){
    console.log("Hello, How are you");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello, How are you ${this.name}`); //--> String interpolation
}
console.log(JsUser.greetingTwo());