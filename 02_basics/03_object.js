// singleton

//object literals
// Object.create

const mySym = Symbol("key1")
const JsUser = {
    name : "abhay",
    "full name" : "Abhay chaudhary",
    [mySym] : "mykey1",
    age : 18,
    location : "ghaziabad",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "friday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "bcd@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "hdhd@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

