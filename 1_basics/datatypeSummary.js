// Primitive 

// 7 types : string, number , boolean, null, undefined , symbol, BigInt



const score= 100 // number
const scoreValue = 100.5 // number

const isLoggedIn = false // boolean
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('152')
const newId = Symbol('152')

console.log( id === newId) // false



// Reference type |(non-primitive)  

// array , objects , functions 

const heros = ['shaktiman', 'naagraj', 'doga'] // array
let myObj = {
    name : "kartik",
    age : 21,
} // object

const myFunc = function() {
    console.log("hello world")
} // function











// stack(primitive) / heap(non-primitive) 

                            // example of primitive datatype

let myName = "kartik"
let anotherName = "myName"

console.log( myName)
console.log( anotherName)


                             // example of non primitive datatype
let bro = {
    Email: "bro@gmail.com", 
    upiId: "bro@okaxis"
    
}            

let bro2 = bro

bro2.Email = "bro2@gmail.com"
console.log(bro)
console.log(bro2)
