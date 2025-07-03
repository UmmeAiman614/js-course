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
// console.log(userMessageLogin());

function addCartPrice(...num1){ //also work as rest
    return num1
}

// console.log(addCartPrice(200,300,400));

const user = {
    name: "AIman",
    Price: "1000"
}
function userObject(anyobject){
    console.log(`user name is ${anyobject.name} and price is ${anyobject.Price}`);
    
}
// userObject(user) //or
userObject({
    name:"Umme",
    Price:"200"
})

const myNewArray = [200,300,400,500]

function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(myNewArray));