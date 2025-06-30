// permitive
// 7 types:
// string, Boolean, Number, null, undefined, Symbol, BigInt
const id = Symbol('123')
const anothorID= Symbol('123')

// console.log(id===anothorID);



// reference (non-permitive)
// Array, Object, function
// array
let heroes =["Aiman", "junaid", "umair"]

//objects
let myObj = {
    name: "Umme",
    age: 16,
    class: 9
}

// function
let myFunction = function(){
    console.log("Hello Umme");
    
}
// console.log(typeof myFunction);






// ************************************************************************//
// Memory
// stack(primitive) -> copy, heap(non-primitive) -> reference

let myName = "Umme aiman"
// let anotherName;
let anotherName = myName
anotherName = "umme"
console.log(anotherName);
console.log(myName);

let userOne = {
    name:"Umme",
    email: "umme@gmail.com"
}

let userTwo = userOne
userTwo.email = "aiman@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
