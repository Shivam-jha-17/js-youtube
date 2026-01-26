// iss lecture mein hum jaanenge ki object ko hum singleton ya constructor se kaise create karte hain


const tinderUser = new Object() // singleton object
// const tinderUser1 = {} // non-singleton object or object literal
tinderUser.id = "123abc"
tinderUser.name = "shivam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// now we learn how to intialize an object into object.

// it is completely possible to create an object in nesting format.
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "shivam",
            lastname: "jha"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2} // wrong way to merge two objects. 
// const obj3 = Object.assign({}, obj1, obj2) // correct way to merge two objects. But aap isse bhi thoda kam use karoge.
// because spreadoperator makes merging easier.
const obj3 = {...obj1, ...obj2} // this called spreadoperator. latest way of merging.

// console.log(obj3);

// jab database se value aati hai toh ye use karenge

const user = [
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 1,
        email: "s@gmail.com",
    },
]

users[1].email // isse hum particular user ka email nikal sakte hain.

console.log(tinderUser);

// infuture aapko iss trah ke methods ki need padegi.

console.log(Object.keys(tinderUser)); // iske output ki value aapko array mein milti hai.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// kai baar objects mein  se jab hum value nikal rahe hote hai toh kuch values hai joo exist hi nahi karti,  jisse crash hone ke chances hote hai. toh hum ye hasOwnProperty method use karte hai.
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // iss method ko hum use karte hai existing aur non-existing property ko check karne mein.


// ✅ Object constructor
// ✅ Object literal
// ✅ Property access (dot notation)
// ✅ Nested objects
// ✅ Spread operator
// ✅ Object.assign
// ✅ Array of objects
// ✅ Object utility methods
// ✅ Property existence checking











