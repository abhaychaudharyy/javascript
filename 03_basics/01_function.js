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
console.log(loginUserMessage("abhay"));