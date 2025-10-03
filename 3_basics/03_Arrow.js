const user = {
  name: "Ravi",
  age: 25,
    greet: function () {
        console.log(`${this.name} , welcome sir `);
    },
        
}
user.greet()
console.log(this);

