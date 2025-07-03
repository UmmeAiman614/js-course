// FOR OF
let arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World";
for (const greets of greetings) {
    if (greets == ' '){
        break;
    }
    // console.log(`Char of greetings : ${greets}`);
    
}


//MAPS

const map = new Map()
map.set("In", "India")
map.set("PAK", "PAKISTAN")
map.set("PAK", "PAKISTAN") //dont execute again
map.set("Fr", "France")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
    
}
