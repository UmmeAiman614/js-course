function sayMyName(){
    console.log("U");
    console.log("M");
    console.log("M");
    console.log("E");
    
}
// sayMyName()

// function addTwoNums(num1, num2){
//     console.log(num1 + num2)    
// }
// addTwoNums(5, 7)
// const result = addTwoNums(3,4)
// console.log(result);

// function addTwoNums(num1, num2){
// let result = num1+num2
// return result
// }
// const result = addTwoNums(3,4)
// console.log("result: ", result);

function userMessageLogin(username = "Sam"){
    if(!username){
        console.log("plz enter name");
        return
        
    }
return `${username} just looged in`
}
console.log(userMessageLogin());

