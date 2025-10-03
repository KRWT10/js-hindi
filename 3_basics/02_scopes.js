//let a = 90
// const b = 40
// var c = 50
//  console.log(a);
//  console.log(b);
//  console.log(c);
 
 if (true) {
    let a = 30
    const b = 40                 //{everything inside this block is called scope}= local scope
    var c = 50             // that is why we dont use var
    console.log("inner :", a);
    
 }
//   console.log(a);
//   console.log(b);            //everything outside the block is called global scope
//   console.log(c);



  function one() {
    const username = "kartik"
        function two() {
            const website = "www.kartikkumar.com"
            console.log(username);
        }
        //  console.log(website);
         two()
  }
//   one()

if (true) {
    let username = "kartik"
         if (username === "kartik") {
             let website = " : www.kartikkumar.com"
                console.log(username + website);
                
    }
}

console.log(one(90));    

function one(num){
    return num+10
}

const addTwoNumbers =function two(num){    // when we assign function to a variable it is called function expression
    return num+20                          // and we cannot access the function before declaration 
console.log(addTwoNumbers(90));