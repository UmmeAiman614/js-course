// permitive
// 7 types:
// string, Boolean, Number, null, undefined, Symbol, BigInt
const id = Symbol('123')
const anothorID= Symbol('123')

console.log(id===anothorID);



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
console.log(typeof myFunction);
