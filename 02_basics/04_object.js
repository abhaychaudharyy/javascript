//const tinderUser = new Object()

const tinderUser =   {}

tinderUser.id = "123abs"
tinderUser.name = "shashi"
tinderUser.isLoggenIn = false

// console.log(tinderUser);

const regularUser = {
    email : "hdh@gmail.com",
    fullName : {
        userFullname:{
            firstName : "abhay",
            lastName : "chaudhary"
        }
        
    }

}

// console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = { obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4} // this is called spread operator 
//console.log(obj3);

const user = [
    {
        id : 1, 
        email : "abc@gmail.com"
    },
    {
        id : 2, 
        email : "abc@gmail.com"
    },
    {
        id : 1, 
        email : "abc@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "abhay"

}
// course.courseInstructor

const{courseInstructor : instructor} = course 
//console.log(courseInstructor);
console.log(instructor);



//JSON FORMAT 
// {
//     "name" : "abhay",
//     "course" : "hindi",
//     "price" : "free"
// }
[
    {},
    {},
    {}
]

