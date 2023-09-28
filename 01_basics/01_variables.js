const accountId = 144553
let accountEmail = "indiasaudi1122@gmail.com"
var accountPassword = "1234"
accountCity = "kochi"

// accountId = 2 // sir ithu work akulla

accountEmail = "check@email.com"

accountPassword = "53425325"

accountCity = "kottayam"
/*
prefer not to use var, because of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountEmail,accountPassword,accountCity])