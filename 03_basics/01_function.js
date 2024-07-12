
//function declaration
function sayMyName(){
    //fucntion definition
    console.log("S");
    console.log("I");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}
//function call
sayMyName()

//function parameters
function addTwoNums(number1,number2){
    // let result = number1+number2
    // return result

    return number1+number2
}

//function arguments
let result = addTwoNums(3,5)
console.log("Result: ",result);


function isLoggedIn(userName = "Sid"){
    if(!userName){
        console.log("Please enter username");
        return
    }
    return `${userName} just logged in`
}

console.log(isLoggedIn("Sidhant"));
console.log(isLoggedIn()); // to counter undefined case --> default value is used ==> (userName = "Sid")


//Rest operator ==> (...)

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,800,1000,500));
//val1=>200,val2=>400, rest of the values are stored in rest operator.
//syntax for rest and spread operator are same, depends on where they are used


//Pass objects in function
const User = {
    username: "Sidhant",
    price: 299
}

function handleObject(anyObject){ //anyObject --> parameter because its generic type
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

handleObject(User)
//or
handleObject({
    username: "sid",
    price: 199
})

//Pass arrays in function
const newArray = [200,400,600,800,1000]

function returnSecondElement(anyArray){
    return anyArray[1]
}

console.log(returnSecondElement(newArray));