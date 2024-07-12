// Immediately Invoked Function Expressions (IIFE)

//Sometimes we want to invoke database file immediately when js file is open in such case IIFE is used

// Interview -> Global scope ke pollution se problem hoti hain kahi bar , toh jo bhi global scope ke variable hain ya declaration hain uske pollution ko hatane keliye IIFE use kiya jata hain

(function chai() {
  //Named IIFE --> chai() is name
  console.log(`DB Connected One`);
})();

// ; is used to stop the first program when writing multiple IIFE

//simple IIFE
(() => {
  console.log(`DB Connected Two`);
})();

//IIFE with variable

((num) => {
  console.log(`DB Connected ${num}`);
})(`Three`);
