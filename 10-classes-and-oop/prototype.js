const myName = "Umme aiman      ";

// console.log(myName.length);
// console.log(myName.truelength);


let heroes = ['junaid', 'umair']

let heroPower = {
junaidPower: 'fight',
umairPower: 'Study',

getPowerUmair: function(){
    console.log(`power of umair is ${this.umairPower}`);
    
}
}
Object.prototype.umme = function(){
    console.log(`Umme is present`);
    
}
// heroPower.umme();

Array.prototype.Heyumme = function(){
    console.log(`Umme says Hello`);
    
}

// heroes.Heyumme();
// heroPower.umme(); //Error


//Inheritance
const user = {
name: 'Chai', 
Email: 'Chai@gmail.com'
}
const teacher = {
     makeVideo : true
}

const teacherSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teacherSupport
}

teacher.__proto__ = user;


//Modern Syntax
Object.setPrototypeOf(teacher, teacherSupport)

const anotherUser = "Umme     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
 
}
anotherUser.trueLength();
"Aiman".trueLength();
"Junaid".trueLength();