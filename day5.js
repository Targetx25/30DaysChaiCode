//Activty 1
function isEven(number){
    if(number %2 == 0){
        console.log("Even");
    }else{
        console.log('The NUmber is odd');
    }
}

function square(number){
    return number * number;
}

//Activity 2

const whoIsMax = function (number1 , number2){
    if(number1 > number2){
        console.log("The Greater no is " + number1);
    }else{
        console.log("The Greater no is " + number2);
    }
}

const mergeStrings = function (str1 , str2){
    return str1 + str2
}

//Activity 3

const sum = (number1, number2)=>{
        return number1 + number2;
}

const characterCheck = (str)=>{
    const array = str.split("")
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element == "i"){
            return true;
        }
        
    }
    return false
}

//Activity 4

const mul = (number1 , number2=34)=>{
    return number1 * number2
}


const greetMe = (name, age= "18")=>{
    console.log("Hello " + name  + " with age " + age + " Wanna Have a chai?");
}


//Activity 5 
function chai(){
    console.log("Chai is actually very garam Bas Samosa Aur miljaye yarr!")
}
function doSomething(chai ,  num){
    for(let i = 0 ; i < num; i++ ){
        chai()
    }


}


function chaivaraiant(varaiance){
   return("chai is of " + varaiance + " type")
}

function bestServedWith(chaiType){
    return chaiType + " and best served with samosa"
}


function chaiWithSamosa(chaivaraiant, bestServedWith, type){
    const chaiType = chaivaraiant(type);
    const result = bestServedWith(chaiType)
    console.log(result)
}

// isEven(11)
// console.log(square(5))
// whoIsMax(19,4)
// console.log(mergeStrings("rat" , "catcher"))
// console.log(sum(10,20))
console.log(characterCheck("lonigs"))
// console.log(mul(10,20))
// console.log(mul(10))
// console.log(greetMe("Mohit"))
// doSomething(chai, 2)
// chaiWithSamosa(chaivaraiant, bestServedWith, "Masala")