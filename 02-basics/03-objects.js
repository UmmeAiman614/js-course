// singletons
// Object.create

//object literals

const mySym = Symbol("Key1") //Imp for interviews
const jsUsers = {
    name : "Aiman", // type of name is string
    "Full name": "Umme Aiman", // can also write like this
    age: 20,
    // mySym: "MyKey1", //here type of mysym is string not symbol
    [mySym]: "myKey1",
    location: "Jhelum",
    email:"ummeiman614@gmail.com",
    isLoggedIn: false,
    logindays: ["mon", "Tues"]
}

// console.log(jsUsers.email); // we cant access through this full name
// console.log(jsUsers["email", "name"]); //in some cases
// console.log(jsUsers[typeof mySym]);

// jsUsers.email = "aiman@gmail.com" //change the value of email
// console.log(jsUsers);
// Object.freeze(jsUsers.name); // after freezing we cant change the value of that object
// jsUsers.email = "umme@gmail.com"
// console.log(jsUsers);




jsUsers.greetings = function(){
    console.log("hello JS User");  
}
jsUsers.greetingsTwo = function(){
    console.log(`hello js User ${this.name}`);
    
}
console.log(jsUsers.greetings());
console.log(jsUsers.greetingsTwo());

