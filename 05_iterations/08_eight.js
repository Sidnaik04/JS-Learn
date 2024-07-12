// reduce

const myNums = [1, 2, 3];

// acc-> accumulator, currval -> current value, 0-> initial value of accumulator
const newNums = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);

console.log(newNums);

//or

const numbers = myNums.reduce((acc, currval) => acc + currval, 0);
console.log(numbers);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const myCart = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(myCart);
