const accountId = 145757
let accountEmail = "abhay@gmail.com"
var accountPassword = "govt"
accountCity = "jaipur"
let accountState;
//accountId = 2 //not allowed

accountEmail = "haa@gmail.com"
accountPassword = "673636"
accountCity = "Delhi"
console.log(accountId);
/*
prefer not to use var 
bcoz of issue in block scope  and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
