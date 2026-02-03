// video no. 25 
// topic: execution context  &  call stack

// javascript execution context

// code file -> global execution context mein joki necessary hai jana. -> this variable mein.
// this ki value window object aati hai jab code browser pe run hota hai naaki run time enviroments pe
// ye pura kaam thread ke andar execution hota hai.
// javascript is single threaded
// isme har chiz ek process hoti hai.

// global execution context
// function execution context
// eval execution context (used with moongose) (ye property hai global object ki ek trah se global hi hota hai.)

// code file -> memory creation phase (locate memory or address for declared variable not executed)
//           -> execution phase (+, -, * ye sab joo bhi kaam hai woo iss phase mein hota hai)

// example file -> 

let val1 = 20
let val2 = 10

function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(5, 2)

console.log(result1);
console.log(result2);

// 1. global excecution / enviroment -> this ke andar

// 2. memory phase (collect all variable and just store it into memory)
//  suppose val1 = undefined
//          val2 = undefined
//          addnum = defination (decalred function)
//          result1 = undefined
//          result2 = undefined

// 3. execution phase
// val1 = 10
// val2 = 5
// addnum mein kuch nahi hoga because humne uski defination already hold karke rakh di hai.
// addnum = [new variable enviroment + execution thread] -> repeat honge dono phase phir se 1. memory phase 2. execution phase
// jitni function execute hoga utni baar sandbox banega.
// result1 = 15 (ye result function sandbox cycle khatam hone ke baad aaya)
// result2 = 12 (iske result ke liye bhi ek alag sandbox bana and delete hua)


// for function sanbox: -> memory phase 
                            //  val1 = undefined
                            //  val2 = undefined
                            // total = undefined
                        
                        // -> execution phase
                            //  num1 = 10
                            //  num2 = 5
                            //  total = 15 (total ka result global execution mein jata hai.)

// function sandbox kaam hone par delete bhi hota hai.


// call stack works on lifo (last in first out)
