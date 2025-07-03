const userEmail = "a@gmail.com"
if(userEmail){
    console.log(`user has email`);
    
}
else{
    console.log(`user has no email`);
    
}

//falsy values
// 0, -0, null, NaN, undefined, "", false, BigInt 0n

//Truthy Values
// "0", 'False', " ", [], {}, function(){}

if(userEmail.length == 0){
    console.log("Empty email");
    
}

let emptyobject = {}
if(Object.keys(emptyobject).length==0){
    console.log("Empty object");
    
}

//false == 0 -> true
// false == '' ->true
// 0 == '' -> true


// nulish coalescing operator (??) : null undefined
let val1 ;
// val1 =5 ?? 10  //answer = 5
// val1 = null ?? 10 //Ans = 10
val1 = undefined ?? 15 //Ans = 15
val1 = null ?? 10 ?? 20 // Ans = 10

console.log(val1);

// terniary operators
// condition ? true: false

const teaPrice = 80
teaPrice <=80 ? console.log("less than 80"): console.log("Greater than 80");


