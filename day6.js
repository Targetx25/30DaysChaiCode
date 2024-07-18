let numbers = [1,2,3,4,5];

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[4]);

//Task3
numbers.push(6);
console.log(numbers);

//Task4
numbers.pop();
console.log(numbers);

//Task5
numbers.shift();
console.log(numbers);
//Task6
numbers.unshift(0);
console.log(numbers)


//Task7
const doubled = numbers.map((num)=>( num * 2))
console.log(doubled);

//Task8
const even = numbers.filter((num)=>( num % 2 == 0))
console.log(even)

//Task9
const sum = numbers.reduce((acc, number)=>( acc + number), 0)
console.log(sum)

//Task10
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}
//Task11
numbers.forEach((number)=>console.log(number))

//Task12
let numbersWithFruits = [
    [1, "Apple"],
    [2, "Banana"],
    [3, "Mango"],
    [4, "Orange"]
];
console.log(numbersWithFruits)

//Task13
const myFav = numbersWithFruits[1][1];
console.log(myFav)