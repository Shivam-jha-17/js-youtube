// kis trah se data ko memory mein rakha jata hai aur access kiya jata hai uss basis pe doo type ke data type hai 
// primitive (call by value :- Value ki copy pass hoti hai, original change nahi hota.)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const Score = 90
const ScoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3435346726556557n


// Non-primitive (call by reference :- Memory ka address (reference) pass hota hai, isliye original change ho jata hai.)

// Array, Objects, Functions.

const heros = ["shaktiman", "naagraj", "doga"] //array

let myObj ={
    name: "shivam",
    age: 21,
}

const myFunciton = function(){
    console.log("hello world ");
}

console.log(typeof myFunciton);

// non-primitive ke data types ka typeof 0bject aata hai but function ka object function aata hai.
// null ka typeof object aata hai.
// and baaki extra information ke liye  ecmascript ki tc39 website visit karke typeof ke baare mein padhe tab ptaa lag jayega.

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// *********************************** Lecture no. 10 ************************************

// stack (Primitive)(copy milegi ) , Heap (Non-Primitive)(refrence milega )

let myYoutubeName = "shivamjhadotcom"

let anotherName = myYoutubeName
anotherName = "abhinavjhadotcom"

console.log(myYoutubeName);
console.log(anotherName);

// non - primitive

let UserOne = {
    email : "jaago@google.com",
    upi : "8287050521@ybl"
}

let UserTwo = UserOne

UserTwo.email = "coding@gmail.com"

console.log(UserOne);

console.log(UserTwo);

