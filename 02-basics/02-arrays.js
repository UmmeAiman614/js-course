const myHeroes = ["Junaid", "Umair", "Umme"];
const otherHeroes = ["Aiman", "Asma", "Amna"]
// myHeroes.push(otherHeroes); //this is not good way
// console.log(myHeroes);
// console.log(myHeroes[3][1]);


// const AllHeroes = myHeroes.concat(otherHeroes); //Alternative
// console.log(AllHeroes);


// const spreadmethod = [...myHeroes, ...otherHeroes] //spread method more prefer than concate
// console.log(spreadmethod);


// const anotherArray = [1,2,3, [4,5,6], 7, [6,7, [8,9]], 10]
// const useable_another_Array = anotherArray.flat(Infinity)  //make one array of many arrys
// console.log(useable_another_Array);



// console.log(Array.isArray('Umme'));
// console.log(Array.from('umme')); //convert into array
// console.log(Array.from({name: "Aiman"})); //interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


