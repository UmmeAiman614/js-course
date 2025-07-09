class user  {
constructor(password, email){
    this.password = password
    this.email = email
}
get email(){
    return this._email.toUpperCase()
}
set email(value){
 this._email = value
}

get password(){
    return `${this._password}Aiman`
}
set password(value){
 this._password = value
}

}

const aiman = new user("Abc", "aiman")
console.log(aiman.email);
