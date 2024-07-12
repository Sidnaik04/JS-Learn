//for in loop
// whenever objects come use for in loop

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    asm: "Assembly"
}

for (const key in myObject) {
    // console.log(key);
    console.log(`${key} => ${myObject[key]}`);
}

//also works on array

const programming = ["js","rb","cpp","java","python"]

for(const key  in programming){
    // console.log(key);
    console.log(`${key} => ${programming[key]}`);
}