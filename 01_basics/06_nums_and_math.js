const score = 100
console.log(score);

const balance = new Number(400); //Can use various number property

console.log(balance);

console.log(balance.toString().length); //converts number to string and gives the length
console.log(balance.toFixed(2)) //two decimal point --> 400.00

const otherNumber_1 = 23.8966
const otherNumber_2 = 123.8966 

console.log(otherNumber_1.toPrecision(3)); //Precise value
console.log(otherNumber_2.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')); //For Indian standards or else its default american 


// ********** Maths ***********

console.log(Math);
console.log(Math.abs(-7)); //Converts negative to positive
console.log(Math.round(3.71)); //Round up the value
console.log(Math.ceil(3.71)); //Ceiling
console.log(Math.floor(3.71)); //Floor
console.log(Math.min(5,2,7,1));
console.log(Math.max(5,2,7,1));

console.log(Math.random()) //Returns random value --> By default random value between 0 and 1
console.log((Math.random()*10)+1) //Now range shifted from 0 to 9 but +1 is done so new range is 1 to 10 => multiply by that number with which you want range in between
console.log(Math.floor(Math.random()*10)+1); //rounds the random value

const min = 10
const max = 20

//Important formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//Max - Min is used instead of 10 is used for range from 0 to 9 and + 1 to avoid 0 so range from 1 to 10 ---> + min is used to state the min value should be 10. So, new range will be from 10 to 20.