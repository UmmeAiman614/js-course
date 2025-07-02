const accountId = 12345
let accountEmail= "ummeaiman@gmail.com"
var accountPassword = "345678"
accountCity = "Jhelum"
let accountState;
// accountId = 2 not allowewd
console.log(accountId);
accountEmail = "ua@gmail.com"
accountPassword="212121"
accountCity = "chiniot"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// prefer not to use var
// bcz of issue in block scope and functional scope