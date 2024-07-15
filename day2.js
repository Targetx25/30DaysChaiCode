//Task1 
num1 = 10;
num2 = 20;
sum = num1 + num2;
console.log(sum);
//Task2
sub = num2 - num1;
console.log(sub);
//Task3
mul = num1 * num2;
console.log(mul);
//Task4
div = num2 / num1;
console.log(div);
//TAssk5
mod = num2 % num1;
console.log(mod);

//AssignMent Operators
let result = 12;
result += num1;
console.log(result);
result -= num2;
console.log(result);

//comparison oeprator

const trafficLight =  true;
const bikeready = true;
const policePermit =  false;
const HighTraffic = true;

if(trafficLight && bikeready){
    console.log("I can go");
}


if(trafficLight || policePermit){
    console.log("I can  STIll go");
}

if(!HighTraffic){
    console.log('Traffic is not high')
}

 2 > 0 ? console.log("This is Postive"): console.log("This is negatrive number")