// const email = "kartik@gmail.com"

// if (email) {
//     console.log("got your email");
// } else {
//     console.log("enter your email");
// }

// // falsy values 
// // 1 : false
// // 2 : 0 (zero)
// // 3 : -0 (negative zero)
// // 4 : 0n (BigInt zero)
// // 5 : "" (empty string)
// // 6 : null
// // 7 : undefined
// // 8 : NaN (Not a Number)

// // everything else is truthy values
// // 1 : true
// // 2 : any number (positive or negative)
// // 3 : any BigInt (positive or negative)
// // 4 : any string (including "false", "0", "null", "undefined")
// // 5 : any object (including empty object {})
// // 6 : any array (including empty array [])
// // 7 : function
                     

// // **************************// to detect array is empty or not// *******************************
// const names = []

// if (names.length === 0) {
//     console.log("array has some names");
// } else {
//     console.log("array is empty");
// }

// // ***********************// to detect object is empty or not// *******************************
// const person = {}

// if (Object.keys(person).length === 0) {
//     console.log("object has some keys");
// } else {
//     console.log("object is empty");
// }



// nulish coalescing operator (??)
// it only checks for null and undefined

//const num1 = 0 ?? 5  
//const num1 = "l" ?? "hello"
//const num1 = null ?? 5
//const num1 = undefined ?? 5
const num1 = false ?? 5

//console.log(num1);  // 0


// ternary operator

// Example: Check if price is greater than or equal to 100
const priceColdcoffee = 150 >= 100 ? console.log("Expensive") : console.log("Affordable");
