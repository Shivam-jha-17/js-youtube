// for each loop for array.
const coding = ["js", "ruby", "java", "python", "cpp"]
// call back function banaya for each ke andar and callback function ka koi naam nahi hota.
// paranthesis ke andar item likhne ka matlab hai aap kuch bhi likh sakte hoo apne elements koo joo array mein hai.
// item apne aap parameter ki trah array se value leke aayega .
// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (val) => {
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);   
// }

// coding.forEach(printMe) // hum yaha previouly declare function ka reference de rahe hai / printMe() karke execute nahi kar rahe. and bahar declare function mein name change nahi karna hota but call back function mein karna hota hai.

// humare paas aur bhi parameters hote hai.
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);  
// })

// this is very common operation in any database because values come in array and object from database.
const myCoding = [
    {
       languageName: "javascript",
       languageFileName: "js"
    },
    {
       languageName: "java",
       languageFileName: "java"
    },
    {
       languageName: "python",
       languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )
