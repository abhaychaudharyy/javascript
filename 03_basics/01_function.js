// console.log("a");
// console.log("e");
// console.log("i");
// console.log("o");
// console.log("u");


function sayMyName(){
    console.log("a");
    console.log("e");
    console.log("i");
    console.log("o");
    console.log("u");

}

//sayMyName()


// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
    
// }
function addTwoNumber(number1, number2){

    // let result = number1 + number2
    // return result
    return  number1 + number2
    
}

const result = addTwoNumber(3,5)

// console.log("result:", result);

function loginUserMessage(username = "sam"){
    if(!username){ // !username ko username === undefined likh skte hain 
        console.log("please enter username");
        return 

    }
    return `${username } just logged in`
}

// console.log(loginUserMessage("abhay"));
//console.log(loginUserMessage("abhay"));


function calculateCartPrice(val1, val2, ...num1 ){
    return num1
}
//console.log(calculateCartPrice(200,400,500));

const user ={
    username : "abhay",
    price : 100
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price
    }`);

}
//handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200, 500, 600, 400]

function returnSecondvalue(getArray){
    return getArray[1]
}
//console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,500,800]));
