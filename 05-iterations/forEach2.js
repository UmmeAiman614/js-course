const coding = ["JS", "Python", "Ruby", "CPP"]

const values = coding.forEach(  function (item) {
    // console.log(item);
    return item
})
// console.log(values); // not return any value


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (nums) => nums>5) no need return keyword


// const newNums = myNums.filter( (nums) => {
//     return nums>5  //not miss return
// })
// console.log(newNums);


// if we want to use foreach method instead of filter

const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);
