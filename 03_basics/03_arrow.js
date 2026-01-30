const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`); // this keyword is used to refer current context.
        
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // output: empty object {}.

// console.log(this); / run on inspect console.

//pehle ke time mein kya tha ki javascript ko excecute karne ka ek hi traika tha browser, joo engine tha browser ko excecute karne ke liye woo browser ke andar hi milta tha lekin abhi uss engine ko humne nikala aur kuch alag naam diya jaise node, bun etc.
// aur ab ye engine standalone hai. toh browser ke andar jab bhi engine run karta hai toh humara sabse global object joo hai woo window hai. tabhi hume windows ki saari property access kar pate hai DOM mein jaise click event, form submit etc. / interview important

// function chai(){
//     let username = "shivam"
//     // console.log(this) // value kuch alag aati hai because aap function ke andar node enviroment ke andar value print kar rahe hai.
//     console.log(this.username); // undefined
//     //this joo hai woo function mein kaam nahi kar paa raha matlab woo context show nahi kar raha jaise object mein karta hai.
// }

// chai()


// function ko declare karne ka alag method eg. arrow function

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

const chai = () => { // simpley remove the function keyword and put and an arrow => between prenthesis and curly braces. this is arrow function.
    let username = "hitesh"
    console.log(this.username); // undefined / ouptut is {} when you run only (this).
}

// chai()

// const addTwo = (num1, num2) => { // aap isse hold kar sakte hoo ek variable mein
//     return num1 + num2
// } // this is explicit return :) because yaha return likhna pad raha hai.


// another method of using arrow function is implict return
// const addTwo = (num1, num2) => num1 + num2 // it is implicit return if you have single line like return num1 + num2.

// const addTwo = (num1, num2) => (num1 + num2) // yaha hume parenthis mein wrap kia and return keyword nahi likhna pdaa but {} mein wrap karte to return likhna padta hai.

// implicit mein object kaise return kare

const addTwo = (num1, num2) => ({username : "hitesh"})

// console.log(addTwo(3,4));

// video 23. end


