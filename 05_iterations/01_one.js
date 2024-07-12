//for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Table of ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}

let myArray = ["India", "Japan", "Singapore", "Finland", "New Zeland"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

// break and continue

for (let i = 0; i <= 10; i++) {
  if (i == 7) {
    console.log("Thala for a reason");
    break;
  }
  console.log(`Value of i = ${i}`);
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 7) {
    console.log("Thala for a reason");
    continue;
  }
  console.log(element);
}
