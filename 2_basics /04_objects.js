// const tindernew = new Object()
const tindernew = {}

tindernew.id = "virat18",
tindernew.name = "virat",
tindernew.isLoggedIn = false 

// console.log(tindernew);

const newUser = {
    Email: "kartik@gmail.com",
    Name: {
        fullname:{
            firstname: "Kartik",
            lastname: "rawat"
        }
    }
}
// console.log(newUser.Name.fullname);

obj1 = {1:"A" , 2:"B"}
obj2 = {3:"A" , 4:"B"}
// obj3 = Object.assign({},obj1,obj2)
obj3 = {...obj1, ...obj2}

// console.log(obj3);

const user = [
    {
    id : 7,
    Email : "k@gmail.com", 
},
    {
    id : 7,
    Email : "k@gmail.com", 
},
    {
    id : 7,
    Email : "k@gmail.com", 
},
    {
    id : 7,
    Email : "k@gmail.com", 
},
]
user[1].Email
console.log(tindernew);
console.log(Object.keys(tindernew));
console.log(Object.values(tindernew));
console.log(Object.hasOwn('isLoggedIn')); // to check  wether the property is present or not 

