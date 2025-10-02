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
        console.log("Username is required");
        return "Please enter your username"
    }
    return `Welcome back ${username} , we missed you!`
}
const message = newUserLoggedInMessage("")
console.log(message);
