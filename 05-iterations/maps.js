const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num+10)
// console.log(newNums);


const newNums = myNumbers
.map( (num) => num*10)
.map((num) => num + 1)
.filter( (num) => num>40)
.forEach( (num) => {
    if (num > 50){
        // console.log(newNums);
        console.log(`${num} greater than 50`);
        
        
    }
})

// console.log(newNums);
