// let a = 10 
// const b = 20
// var c = 30
// {} => block scope, used in functions, loops, conditionals / isse object mein scope nahi bola jata.

// var c = 300
// ye global scope hai / global ki value => scope mein but scope != global 

let a = 100 
if(true){
    let a = 10 // let aur const ka scope block hota hai.
    const b = 20
    c = 30 // ye block scope hai 
}
// console.log(a);
// console.log(b); 
// console.log(c);

// scope in windows and scope in node are twoo diffenent things.

// dom / nested scope / closure (interesting topic in js) aur ye ye kafi baar interview mein pucha jata hai. toh isko sikhne ke liye hume dom aana chahiye.

// nested scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); // error aayega kyunki two function ka scope khatam hogya aur console nahi hua / and line by line code chalne ki wajah se two() tak nahi jaa paya.

    two() // ab ye execute hua aur one() ki value print hui. / means child function parent function ki value ko access kar sakta hai.
    // parent function child function ki value ko access nahi kar sakta hai.
    // aur issi wajah se closure ka concept aata hai.

}

// one() // iss call ke saath two() bhi call hota hai tab hi value print hoti hai. warna agar two() ko comment kar doo toh kuch print nahi hoga.

// exmaple :) chhote bacche icecream chhin sakte hai.  lekin bade nahi chhin sakte hai.

// if - else

if(true) {
    const username = "hitesh"

    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + " " + website);

    }
    // console.log(website); // error aayega kyunki website ka scope sirf inner if block tak hi hai.

}

// console.log(username); // error aayega kyunki username ka scope sirf outer if block tak hi hai.

// ++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++


console.log(addone(5)); // output : 6

function addone(num){
    return nume + 1

}

// addone(5) // value print nahi hui kyunki hume console.log nahi kiya but function chala hai.



addTwo(5) // it shows an error because we hold a function in variable. / issi ko hoisting bhi bol dia jata hai.
const addTwo = function(num){ // iss function mein ye chiz different hai humne const addTwo mein function assign kiya hai. const addTwo koo hum expression bolte hai.
    return num + 2
    // variable addtwo aur another variable are very powerful becuase they can handle anyfunctions, json etc.
}

// addTwo(5) 
