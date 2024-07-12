const name = "Sidhant"
const age = 20

// console.log("Hello my name is "+name+" and my age is "+age); --> Not a good way to use
//instead use:
console.log(`Hello my name is ${name} and my age is ${age}`);  //--> js interpolation


const gameName = new String('De_AnoN') //Different string methods can be used using this.
// H.W: to learn more about this go in browser console tab and go through different methods and write an article

console.log(gameName[0])
console.log(gameName.__proto__) //Will learn later

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('A'))
console.log(gameName.charAt(4));

const subString = gameName.substring(0,4)
console.log(subString);

const sliceString = gameName.slice(-7, 4) //Only here you can use negative value
console.log(sliceString);

const trimString = "  sid  "
console.log(trimString); // This prints along with extra spaces
console.log(trimString.trim()); //This trims the extra space and prints

const url = "https://DeAnoN.com/Sidhant%20Naik"
console.log(url.replace('%20','-'));

console.log(url.includes('Naik')) //true
console.log(url.includes('Bro')); //false

const Line = new String("The moon is beautiful isn't it?")
console.log(Line.split(" "));