// Details about functions in JavaScript
// why functions are important, and ye kaise aapke aage jaake kaam aayenge like react mein.
// function are very important part of javascript, and functions ko akele nahi padha jaa sakta, functions ke saath apko javascript ka memory management bhi samajhna padega.
// yaha pe kuch call stacks, kaise function apna scope banata hai . bina isko jaane function ki kahani samajh nahi aayegi.

// function ek simple sa traika hai jayda heavy tarike se sochenge toh ulajh jaoge, aur samjh nahi aayega.

// function = package jiska matlab multiple task ko function mein band kiya aur aap isse kahi bhi use kar sakte hoo. aur aap iski copy leke jaa sakte hoo. aur kaam apka ho jayega.
// it is just a way of packaging the codes inside a package and we can use the copy of package anywhere and use it.

// console.log("S")
// console.log("H");
// console.log("I");
// console.log("V");
// console.log("A");
// console.log("M"); // agar hum isse baar baar use karenge toh problem hogi isliye hum use karte hai functions ka.

// function sayMyName() {
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("V");
//     console.log("A");
//     console.log("M");
//     } // function declaration or function definition

// sayMyName // function reference // isse run karne se koi output nahi milega. and refrence se matlab ye bhi hai ki koi function hai joo kahi rehta hai lekin woo run tabhi hoga jab aap excecute karoge with parenthesis ().
// sayMyName() // function invocation / function call / function execute

// function addTwoNumbers(number1, number2){ // function with parameters(paranthises ke andar ki value ko parameters bolte hai).
//     console.log(number1 + number2);
// }

// addTwoNumbers(10, 20); // function call with arguments (jo value hum function ko dete hai in the parenthis() use arguments bolte hai).

// kya hoo agaar koi user number ki jagah string de de? / toh hum use karte hai checking like if else. sirf yahi ek method nahi hai function mein bahut traike hote hai hai ek problem ko solve karne ke liye.
// addTwoNumbers(10, "20"); // ye string ko concatenate kar dega. output hoga 1020

// hum iss function ke call ko ek variable mein store kar sakte hai.
// const result = addTwoNumbers(10, 20);
// agar aap iss trah se result ki value print karoge toh aapko undefined milega.

// console.log("Result is:", result); // Result is: undefined
// iska reason ye hai ki function ke andar koi return statement nahi hai. toh by default javascript function return karta hai undefined ko console karne par. / iska matlab ye nahi ki aapne console kiya aur value return bhi ho rahi hoo. uske liye hume return keyword ka use karna hota hai tab jaake value naye variable result mein store hogi.

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result; // aab value save ho jayegi result variable mein.
    // console.log("Function ke andar"); // ye line kabhi execute nahi hogi kyuki return ke baad function ka execution ruk jaata hai.
    return number1 + number2; // hum seedha yaha pe bhi return kar sakte hai bina extra variable ke.
}
const result = addTwoNumbers(10, 20); // yaha pe ek aur baat hai ki const variable function ke bahar likha hai aur let variable function ke andar.

// console.log("Result is:", result);

function loginUserMessage(username){ // hum parameter mein kuch default value bhi pass kar sakte hai. username = "sam"
    if(username === undefined){ // if(!username) // isse bhi kar sakte hai. / ! => convert true to false and false to true.
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in!`;
}

// loginUserMessage("shivam") // isse run karenge toh kuch bhi output show nahi hoga toh iska matlab ye nahi ki function excecute nahi hua woo hua hai but woo print nahi hua toh hum console karete hai.
// console.log(loginUserMessage("shivam"));

// what happen if we have empty string ?
// console.log(loginUserMessage("")); // output : just logged in!
// console.log(loginUserMessage()); // output : undefined just logged in!

// shopping cart example

function calculateCartPrice(...num1){ // (val1, val2, ...num1) // value overwrite hoo jayegi aur hume restoperator ki value array form mein milegei.
    return num1;

}

// console.log(calculateCartPrice(200, 400, 500, 200)); // output : 200. aur isse solve karne ke liye restopertor ka use karte hai. / restopertor = spread operator but use case differnet hai.

// now we learn object passes in function

const user = {
    username: "shivam",
    price: 199
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);

// handleObject({
//     username : "sam",
//     price: 399
// })

const myNewArray = [200, 300, 400, 500]

function returnSecondvalue (getArray){
    return getArray[1];
}

// console.log(returnSecondvalue(myNewArray)); // 400
console.log(returnSecondvalue([1000, 2000, 3000])); // 2000