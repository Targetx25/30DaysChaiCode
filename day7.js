//Task 1

let book = {
    title : "nothing works",
    author : "Mohit",
    year : 2020,
}

console.log(book)

//Task2
console.log(book.title)
console.log(book.author)

//Task3
book.details = function(){

}
book.getSumnary = function (){
    return `The book ${book.title} was written by ${book.author} in ${book.year}`
}

console.log(book.getSumnary())

//Task 4
book.updateYear = function(newYear){
    this.year = newYear
}

book.updateYear(2021)
console.log(book)

//TAsk 5
let book2 = {
    title : "Win with nothing",
    author : "Ramasay ",
    year : 2023,
}
let library = {
    name  : "The Great Library",
    books : [book, book2], 
}

console.log(library)


//Task 6
console.log(library.name)
library.books.forEach((book)=>console.log(book.title))



//Task 7
book.getDetails = function (){
    return `Book name is ${this.title} and  written by ${this.author} in  ${this.year} year`
}

console.log(book.getDetails())

//Task 8
for (let property in book){
    console.log(property)
    console.log(book[property])
}

//Task9
console.log(Object.keys(book))
console.log(Object.values(book))


