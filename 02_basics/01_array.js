//Array --> It is an object
// Javascript arrays are resizable and can be mixed value

//Ways to declare array:
const myArr = [1,2,3,4,5];
const fruits = ["Apple","Banana","Chiku"]

const myArr2 = new Array(1,2,3,4,5);

console.log(myArr[1]);
console.log(myArr2[3]);

//Array Methods:

myArr.push(6)
myArr.pop()
myArr.unshift(9) //--> element is placed at the start of the array
myArr.shift() //--> element that is placed at the start is removed

console.log(myArr.includes(8)); //--> 8 is not present in array so return false
console.log(myArr.indexOf(4)); //--> index of the element 4

const newArr = myArr.join(); //--> coverts array into string

console.log(newArr);
console.log(typeof newArr);

console.log(myArr);

//Slice and Splice --> Learn about difference in both

console.log("A => ", myArr);

// slice --> do not modify the content of array

const  arr1 = myArr.slice(1, 3);
console.log("B => ", myArr);
console.log(arr1);

// splice --> modifies the content of array
const arr2 = myArr.splice(1,3);
console.log("C => ",myArr);
console.log(arr2);