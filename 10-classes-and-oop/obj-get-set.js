const user = {
    _email: "Aiman@gmail.com",
    _password: "ABC123",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}
const umme = Object.create(user)
console.log(umme.email);
