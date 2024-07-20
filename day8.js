//Task1 

let myname = "Mohit";
let myAge = 21;
let greet = `MY name is ${myname} and my age is ${myAge}`

console.log(greet)

//Task2
let job = `${myname} does the job of developer intern and yeah he is of age ${myAge}
But Yeahe he needs to go a long ,
a very long way.
`
console.log(job)

//Task3
let details = ["Abhay", "MAngo"]
const [hisName , favFruit] = details
console.log(hisName, favFruit )

//Task4
let book = {
    title : "Its A book Bruh",
    author : "Mohit",
}

const {title, author} = book
console.log(title,  author)

//Task5
let updatedDetails = [...details, "Student"]
console.log(updatedDetails)

//Task6

function sumAll(...numbers){
    let sum = 0
   for(let num of numbers){
    sum += num;
   }
   console.log(sum)
}

sumAll(1,2,3,4)

//Task7
function giveProduct(num1, num2= 1){
    return num1 * num2;
}

console.log(giveProduct(5,6))
console.log(giveProduct(5))

//Task8

let name = "Mohit"
let age = 21
let greet2 = (name, age)=> `Hello ${name} with age ${age} wanna Have a chai?`
let details2 = {name, age, greet}
console.log(details2)


//Task9
let something = "name"

let idk = {
    [something] : "something",
}

console.log(idk)
