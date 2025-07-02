// ARRAYS
const myArr = [0,1,2,3,4,5];
const myHeroes = ["junaid", "Umair", "Umme"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[4]);



// arrays methods

// myArr.push(6); //add value in array
// myArr.push(7);
// myArr.pop() //simply remove last value in array

 myArr.unshift(9) //add value at first but it is not a good way
 myArr.shift() //remove first value

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(5));


const newArray = myArr.join(); //convert data type into string

console.log(myArr);
console.log(newArray);
console.log(typeof newArray);


console.log('a ', myArr);


const mySlice = myArr.slice(0,3)
console.log('b', mySlice); // not include last value and add other all values


const mySplice = myArr.splice(1, 3)
console.log('c', myArr);  
console.log(mySplice);  //change overall array, add first and last both values, and give the values other than splice in array
