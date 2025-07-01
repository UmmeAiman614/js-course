const name = "umme";
const repocount = 43;

// console.log(name + repocount + "Value")

console.log(`Hello my name is ${name} and my repocounts are ${repocount}`);
const gameName = new String("Umme-Aiman-zafar");

// console.log(gameName[5]);
// console.log(gameName.__proto__)
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = "     Umme     "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim removes extra spaces


const url = 'https://ummeAiman%10zafar'
console.log(url.replace('%10', '%30')); //replace replaces value which we want
console.log(url.includes('junaid'));
console.log(gameName.split('a'));
