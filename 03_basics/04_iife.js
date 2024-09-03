// immediately invoked function expression (IIFE)

(function chai(){
    //NAMED IIFE
    console.log(`DB CONNECTED`);
    
})();


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('abhay')