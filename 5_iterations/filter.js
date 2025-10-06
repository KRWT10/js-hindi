const num = [1,2,3,4,5,6,7,8,9,10]; 


//  const newnum = num.filter( (path) => path > 3 )
//  console.log(newnum);

 
const newnum = num.filter( (path) => {
    return  path > 3                          // whenever u use {} then u have to use return 
})                                              // {} this is called scope 
console.log(newnum);



const books = [
  { title: "The Silent Patient", genre: "Thriller", publish: 2019, edition: 1 },
  { title: "Atomic Habits", genre: "Self-Help", publish: 2018, edition: 3 },
  { title: "Dune", genre: "Science Fiction", publish: 1965, edition: 2 },
  { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: 5 },
  { title: "Educated", genre: "Memoir", publish: 2018, edition: 1 },
  { title: "Sapiens", genre: "History", publish: 2011, edition: 4 },
  { title: "To Kill a Mockingbird", genre: "Classic", publish: 1960, edition: 6 },
  { title: "The Pragmatic Programmer", genre: "Programming", publish: 1999, edition: 2 }
];

let  newbooks = books.filter( (book) => book.genre === "Fiction" )
 newbooks = books.filter( (book) => book.publish >1990 && book.edition >=2 )

console.log(newbooks);