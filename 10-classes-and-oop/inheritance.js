class user {
  constructor(username){
   this.username = username
}
logMe(){
    console.log(`username is ${this.username}`);
    
}
}

class teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
const chai = new teacher("chai", 'chai@gamail.com', '123')
// chai.addCourse()
const masalChai = new user("Masala chai")
// masalChai.addCourse(); error

// masalChai.logMe()

console.log(chai instanceof user);
console.log(chai instanceof teacher);
