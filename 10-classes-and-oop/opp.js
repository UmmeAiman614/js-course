const user = {
    userName: "Umme Aiman",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function () {
        // console.log('get details of user from db');
        // console.log(`userName: ${this.userName} `);
        // console.log(this);


    }

}

// console.log(user.userName);
// console.log(user.getUserDetails());

// console.log(this);


function User(userName, loginCount, isLoggedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`welcome ${this.userName}`);

    }

    return this
}

const userOne = new User('Umme', 10, false)
const userTwo = new User('Aiman', 12, true)
console.log(userOne.constructor);
// console.log(userTwo);

