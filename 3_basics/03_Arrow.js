const user = {
  name: "Ravi",
  age: 25,
    greet: function () {
        console.log(`${this.name} , welcome sir `);
    },
        
}
user.greet()
console.log(this);



() => {}    // this is arrow function 

const add3 = (num1 , num2 )=> {
  return  num1 + num2 
}
console.log(add3(8 , 8))



// const add4 = (num1 , num2 )=> num1 + num2
const add4 = (num1 , num2 )=> ({username : "kartik rawat "})
console.log(add4(10 , 8))