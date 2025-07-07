const coding = ["JS", "Python", "Ruby", "CPP"]

// coding.forEach(  function (item) {
//     console.log(item);
    
// })

// coding.forEach( (val) => {
// console.log(val);

// })

// function PrintME(item){
//     console.log(item);
    
// }
// coding.forEach(PrintME)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
})