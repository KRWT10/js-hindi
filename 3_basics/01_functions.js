function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("I");
    console.log("k");
}
// sayMyName()

function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result = addTwoNumbers(99, 138)
// console.log("result:" , result);

function newUserLoggedInMessage(username){
    if (!username) {
        // console.log("Username is required");
        // return "Please enter your username"
    }
    // return `Welcome back ${username} , we missed you!`
}
// const message = newUserLoggedInMessage("")
// console.log(message);


function calculateCartprice(...Num1) {
    return Num1
}
// console.log(calculateCartprice(200 , 711 ,520 ,622 ,122 ));


const object ={
    name: "kartik",
    email: "k@online.com"
}
function handlingObj(allobject) {
    console.log(`the name is ${allobject.name}, the email is ${allobject.email}`);
}
handlingObj(object)
handlingObj(
    {
        name : "tu chup rehe",
        email : "tu@gmail.com"
    }
)

const myNewArray =[200, 300,600, ]
function returnValue(allArray) {
    return allArray[2]
}
console.log(returnValue([300,699,400]));
