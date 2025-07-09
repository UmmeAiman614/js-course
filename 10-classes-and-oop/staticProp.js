class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    static createID(){
        console.log(`123`);
        
    }
}
const chai = new user("Aiman")
// chai.createID()


class teacher extends user {
    constructor(username, email){
        super(username)
        this.email=email
    }
}
const tea = new teacher("tea", 'tea@chai.com')
tea.logMe()
// tea.createID()