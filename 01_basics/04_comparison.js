console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);
// output for both the above conditions will be true, but make sure to compare values of only same datatype.

//Avoid this types of comparison
console.log( null > 0); // false
console.log(null == 0); //false
console.log(null >= 0); //true
// The reason is that equality check (==) and comparison check (>,<,>=,<=) works differently
//Comparison converts null to a number, treating it as 0. Thats why (3) null >= 0 is true and (1) null > 0 is false.

//Avoid this types of comparison
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
//All this condtion will be false


// === -> Strict check => not only checks the value but also checks the datatype
console.log("2" === 2);
