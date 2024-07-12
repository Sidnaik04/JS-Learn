//Singleton objects => using constructors

const androidUser = new Object(); 

androidUser.id = "123abc"
androidUser.gmail = "sidnaik04@android.com"
androidUser.isLoggedIn = true

console.log(androidUser);

//nesting of objects:
const regularUser = {
    email: "xyz@google.com",
    fullname: {
        userName: {
            firstName: "Sidhant",
            lastName: "Naik",
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userName);
console.log(regularUser.fullname.userName.firstName);


//Merge the objects:
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const obj4 = Object.assign({},obj1,obj2,obj3) //{}--> target , obj1,2,3 --> source ==> Rarely used method
const obj5 = {...obj1,...obj2,...obj3} //Mostly used method

console.log(obj4);
console.log(obj5);


//Objects in Array ==> Use in database

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

console.log(users[1]);



console.log(androidUser);

console.log(Object.keys(androidUser)); // to get the keys of object in array form
console.log(Object.values(androidUser)); // to get the values of object in array form
console.log(Object.entries(androidUser));

console.log(androidUser.hasOwnProperty('isLoggedIn')); //To chech whether object has this property


//De-structure of objects
const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh",
}

const {courseInstructor} = course  //To extract the value
console.log(courseInstructor); // dont have to use course.courseInstructor

const{courseInstructor: instructor} = course // also change the name as you want
console.log(instructor);


//Json format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]