let value = "33"
// let value = "33ab"
// let value = true
// let value = false
// let value = null
// let value = undefined

console.log(typeof value);

//To covert into number
let valueInNumber = Number(value)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" => 33
//"33ab" => NaN --> Not a Number
//"true" => 1; false => 0
//null => 0
//undefined => NaN

let isLoggedIn = 1

//To covert into boolean
let valueInBoolean = Boolean(isLoggedIn)
console.log(valueInBoolean);

//1 => true; 0 => false
//"" => false
//"sidhant" => true

let number = 33

// To covert into string
let valueInString = String(number)
console.log(valueInString);
console.log(typeof valueInString);

// ******************** Operations ***********************

let score = 3
let negativeScore = -score

// console.log(negativeScore);

let str1 = "Sidhant"
let str2 = " Naik"

let str3 = str1+str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

let gameCounter = 100
++gameCounter; //Prefix
gameCounter++; //Postfix

console.log(gameCounter);

//Postfix: If used postfix (for example, x++), the increment operator increments and returns the value before incrementing.
let x = 3
const y = x++
console.log("x: "+ x +", y: "+ y)

//Prefix: If used prefix (for example, ++x), the increment operator increments and returns the value after incrementing.
let a = 9;
const b = ++a;
console.log("a: "+ a +", b: "+ b)
