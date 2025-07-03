//dont use var

function one(){
     const name= "AIman"
     function two(){
        const website= "Youtube"
        console.log(name);    
     }
    //  console.log(website); //error
    //  two()
     
}
one()

if(true){
    const name = "Aiman"

    if(true){
        const website = "Youtube"
        // console.log(name + website);
        
    }
// console.log(website); //error

}
// console.log(name); //error bcz accessing outside scope










// ++++++++++++++++++++++INTERSTING+++++++++++++++++++++++++
//Hoisting
console.log(addOne(5)); //not error bcz we declare only function
function addOne(num){
    return num + 1;
}

// console.log(addTwo(5)); //error bcz we hold function in one variable
const addTwo = function(num){
    return num+2
}
