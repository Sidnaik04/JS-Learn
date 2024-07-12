const marvel = ["thor","ironman","captain"]
const dc = ["batman","superman","joker"]

const all = marvel.concat(dc) // used to combine two arrays --> Limitation: Only 1 array can combine at a time
console.log(all);

const all_heros = [...marvel,...dc] //Spread method: can combine multiple arrays at a time
console.log(all_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const newArr = another_array.flat(Infinity) //--> Infinity describes the depth 
console.log(newArr);

console.log(Array.isArray("sidhant")); //--> Checks whether it is array or not --> here it is not , hence => false
console.log(Array.from("sidhant"));
console.log(Array.from({name:"sidhant"})) 

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));

//Read about isArray, from and of