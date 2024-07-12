//for each loop
//the most used loop

const coding = ["js", "py", "cpp", "java", "rb"];

coding.forEach(function (i) {
  console.log(i);
});

// or

coding.forEach((i) => {
  console.log(i);
});

function prinArr(i) {
  console.log(i);
}
coding.forEach(prinArr);

coding.forEach((i, index, arr) => {
  console.log(i, index, arr);
});

// Object inside array => used to acces data in database
const myCoding = [
  {
    languageName: "Javascript",
    languageFile: "js",
  },
  {
    languageName: "Python",
    languageFile: "py",
  },
  {
    languageName: "Ruby",
    languageFile: "rb",
  },
  {
    languageName: "C++",
    languageFile: "cpp",
  },
];

myCoding.forEach((i) => {
  console.log(`${i.languageFile} => ${i.languageName}`);
});
