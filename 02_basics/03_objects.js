// we have two type of option to creating object
// literal, constructor
// singleton humesa create hota hai (while creating with constructor)
// Object.create

// but literals ka use karke agar objects declare kare toh singleton nahi banta hai . 

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "shivam", // but compiler name = "name" string ki trah leta hai 
    "fullname": "shivam jha", 
    [mySym]: "mykey1",
    age: 21, 
    location: "panipat",
    email: "shivam@google.com",
    isLoggedin: false,
    lastLoginDays: ["monday", "saturday"]
} 

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["fullname"]);
// console.log(Jsuser[mySym]);

// object ki value kaise access karte hain :- dot notation and bracket notation se
// change kaise karte hai 

Jsuser.email = "shivam@chatgpt.com"
// Object.freeze(Jsuser) // freeze karne ke baad object ki value change nahi kar sakte hain
Jsuser.email = "shivam@microsoft.com"
// console.log(Jsuser);

Jsuser.greetings = function(){
    console.log("hello Js user");
    // agar aap console.log("hello Js user"); ki jagah return "hello Js user"; karte hain toh jab aap is function ko call karenge tab yeh value return karega bina error ke iss comannad ke saath console.log(Jsuser.greetingsTwo());
}

Jsuser.greetingsTwo = function(){
    console.log(`hello Js user, ${this.name}`);// converting from string to backticks, "" -> ``. then object mein joo name hai usko reference karne ke liye hum use karenge string interpolation `${this.name}` // same object ko jab reference karna hota hai toh hum this. ka use karte hain
    
}

console.log(Jsuser.greetings);
console.log(Jsuser.greetingsTwo());


// console.log(Jsuser.greetings); vs console.log(Jsuser.greetings());
// part - 1 is completed about object.