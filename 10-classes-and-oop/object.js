function multiply(num){
return num*5;
}
multiply.power = 2;
//  console.log(multiply(5));
//  console.log(multiply.power);
//  console.log(multiply.prototype);
 

 function User(userName,score ){
    this.userName = userName;
    this.score = score
 }
 
 User.prototype.increment = function(score){
    score++;
 }
 User.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
 }
 const chai = new User("chai", 20)
const tea = new User("tea", 25)
chai.printMe();


