// Immediately Invoked Function Expressions (IIFE) / v. no. 24

(function chai(){
    // this is named iife
    console.log('DB CONNECTIED')
})();

// ()(); / first parenthesis defination likhne ke liye function ki and second call karne ke liye likhe the above one. / without semicolon it gives an error so in js ; used to end code. 
// global scope ke pollution se problem hoti hai kai baar too uss global scope ke joo bhi variable ya declartion hai usko hatane ke liye humne iife ka use kiya hai. / intervies answer.

// / we also use IIFE with arrow function

( () => {
    console.log('DB CONNECTED');
    // unnamed iife
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
    
} )('shivam'); // iife also used with parameter and arguments
// end here

// video 25 14:00




