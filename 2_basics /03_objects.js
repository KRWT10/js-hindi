// object literals  

 const mySym = Symbol("key1")

const NewUser= {
    name : "kartik",
    class :"graduation",
    "full name" : "kartik rawat " ,
    [mySym] : "myKEY1",
    age: "18",
    isloggedin:"false",
    email: "kartik@noob.com",
    lastLogInDays: ["monday", "saturday"]

}

// console.log(NewUser["name"])
// console.log(NewUser.name)
// console.log(NewUser["full name"])
// console.log(NewUser[mySym])


NewUser.email = "kartik@joker.com" 
// console.log(NewUser);

//  Object.freeze(NewUser)
 Object.email = "kartik@microsoft.com"

 NewUser.greeting = function(){
     console.log("hello kartik");
 }
 
 console.log(NewUser.greeting());


    NewUser.greetings2 = function(){
    console.log('hello kartik, ${this.name}');
    }
    console.log(NewUser.greetings2());
    
    
 
 
 
