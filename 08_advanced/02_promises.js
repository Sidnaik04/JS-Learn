// Create different types of promises

//Promise One
const promiseOne = new Promise(function (resolve, reject) {
  //use for:
  // doing async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async Task 1");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  //then associated with resolve()
  console.log("Task 1 consumed");
});

//Promise Two
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Task 2 consumed");
});

//Promise Three
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "sid", email: "naiksidhant04@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//Promise Four
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // error = false
    if (!error) {
      resolve({ username: "sid", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

//chaining
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

//Promise Five
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "Boi", password: "456" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

//async and await
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//fetch: using async and await
async function userData() {
  try {
    const response = await fetch("https://api.github.com/users/Sidnaik04");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
userData();

//fetch: using .then and .catch
fetch("https://api.github.com/users/Sidnaik04")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log("Error: ", error));
