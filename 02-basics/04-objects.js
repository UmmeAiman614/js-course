// const tinderUsers = Object(); //singleton object
const tinderUser = {} //non-singleton object

tinderUser.id = "1234"
tinderUser.name = "Junaid"
tinderUser.isloggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Umme",
            lastName: "Aiman"
        }
    }
}
// console.log(regularUser.fullname.userFullName)

const obj1 = {1: "A", 2:"B"}
const obj2 = {3:"C", 4: "D"}
// const obj3 = {obj1, obj2}
// console.log(obj3); //not good way

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}  //most useful way
// console.log(obj3);


const usersArray = [
    {
        id: "1234", 
        name: "Name", 
        location: "Jhelum"
    },
    {
        id: "1234", 
        name: "Name", 
        location: "Jhelum"
    },
    {
        id: "1234", 
        name: "Name", 
        location: "Jhelum"
    },
    {
        id: "1234", 
        name: "Name", 
        location: "Jhelum"
    },
    {
        id: "1234", 
        name: "Name", 
        location: "Jhelum"
    },
]
// array[1].name;
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //first is key, 2nd is value
// console.log(tinderUser.hasOwnProperty('isloggedIn'));




// object destructuring
const course ={
    courseName: "JS course",
    coursePrice: "1000",
    courseInstructor:"Umme Aiman"
}

// course.courseInstructor
const {courseInstructor} = course; //or below wala
const {courseInstructor:Teacher} = course; //if we want to call call instructor more than one time, this is perfect way
console.log(Teacher);
