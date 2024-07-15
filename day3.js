const number = 10;

if(number  >0 ){
    console.log("Positive");
}
else if(number < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

const Age = 21 ;

if(Age >= 18){ 
    console.log("The Person Can Vote");
}else{
    console.log("Not Eligible To Vote");
}


//largest of three numbers

let num1 = 65;
let num2 = 20;
let num3 = 40;

if(num1 > num2){
    if(num1 > num3){
        console.log("num1 is largest");
    }else{
        console.log("num3 is largest");
    }
}else {
    if(num2 > num3){
        console.log("num2 is largest");
    }else{
        console.log("num3 is largest");
    }
}

let weekNUmber = 5

switch(weekNUmber){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");                        
}


//ok so considering the paper is of 30 marks 
let score = 28
switch (true) {
    case (25 <= score):
        console.log("Grade A ")
        break;
    case (20 <= score <= 24):
        console.log("Grade B ");
        break;
    case (15 <= score <= 19):
        console.log("Grade C ");
     case (10 <= score <= 14):
        console.log("Grade D ");
        break;
    case (0<= score <= 9):
        console.log("Grade F "); 
        break;                  

    default:
        console.log("Please enter the  vAlid marks")
        break;
}
let num = 18;
num %2 == 0 ? console.log("Even") : console.log("Odd");

///Leap Year

let year = 2020;
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("Leap Year");
        }else{
            console.log("Not a Leap Year");
        }
    }else{
        console.log("Leap Year");
    }
}else{
    console.log("Not a Leap Year");
}    
