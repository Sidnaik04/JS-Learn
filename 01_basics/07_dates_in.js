// Dates

let myDate = new Date();

console.log(myDate.toString()); //Thu Jun 20 2024 19:59:39 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Thu Jun 20 2024
console.log(myDate.toLocaleDateString()); //20/6/2024
console.log(myDate.toISOString()); //2024-06-20T14:29:39.899Z
console.log(myDate.toJSON()); //2024-06-20T14:29:39.899Z
console.log(myDate.toLocaleString()); //20/6/2024, 7:59:39 pm

console.log(typeof myDate); //object

let createMyDate = new Date(2024, 0, 23) //Month in JS starts from 0 because its an array
// let myCreatedDate = new Date(2024, 0, 23) //23/1/2024, 12:00:00 am
// let myCreatedDate = new Date(2024, 0, 23, 5, 3) //23/1/2024, 5:03:00 am
let myCreatedDate = new Date("2024-01-14") //14/1/2024, 5:30:00 am
// let myCreatedDate = new Date("01-14-2024") //14/1/2024, 12:00:00 am

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); //Use for designing quizes

console.log(myTimeStamp); //milliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(myCreatedDate/1000)); // converts into seconds

let newDate = new Date();
console.log(newDate); //2024-06-20T14:52:00.656Z
console.log(newDate.getMonth() + 1); //starts from 0 so + 1
console.log(newDate.getDay());

console.log(`today is: ${newDate.getDate()} `);

newDate.toLocaleString(`default`,{
    weekday: "long",
})



