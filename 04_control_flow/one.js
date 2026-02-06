// if
// const isLoggedin = true
// const temperature = 40

// if(temperature === 40){
//     console.log("less than 50");
    
// }else{
//     console.log("temperature is greater than 50");
    
// }
// console.log("execute");

// <, > <=, >=, ==, !=, ===, !=

// let, const = scope oriented / var is not scope oriented.
// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
    
// }
// console.log(`User Power: ${power}`);

// short hand notation

const balance = 1000

// if(balance > 500) console.log("test"); // implicit scope (matlab ki humne assume kiya ki yaha scope hai.) 
// if(balance > 500) console.log("test"),console.log("test2") / not a good way to written a code. 

// nesting

// if(balance < 500 ){
//     console.log("less than 500");
    
// }else if (balance < 750 ){
//     console.log("less than 750");
    
// }else if (balance < 900 ){
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200")
// }

// in real life use case

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard && 2==3){ // all condition have been true, only then code will be executed. otherwise no execution.
    console.log("allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in: ")
}
