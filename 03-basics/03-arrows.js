const user= {
     userName: "Aiman",
      price: "200",

    welcomeUser: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeUser();
// user.userName = "Umme",
// user.welcomeUser()
// console.log(this);

// // function chai(){
// //     // const userName = "Aiman"
// //     // console.log(this); 
// //     // console.log(this.userName); //dont execute
      
// // }
// chai()


// const chai = function(){
//     let name = "Aiman"
//     console.log(this);
//     console.log(this.name); /dont execute
// }
// chai()


// const chai = () => {
//     let name = "Aiman"
//     console.log(this);
//     console.log(this.name); /dont execute
// }

//explicit arrow function -> we use return keyword
// const addTwo = (num1, num2) =>{ //basic arrow function
// return num1+num2
// }
// console.log(addTwo(3,4));



//implicit arrow function
// const addTwo = (num1, num2) =>  num1+num2
// const addTwo = (num1, num2) => (num1+num2) //dont need return with these brackets


// const addTwo = (num1, num2) => ({userName : "Aiman"}) //for objects we write in curly brackets
// console.log(addTwo());



const MyArray = [1,2,3,4]
MyArray.forEach(()=>{})