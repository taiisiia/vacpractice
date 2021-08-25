//variables 

//1
const str = 'hello js';
const int = 100;
const num = 5.5;
const bool = true;

console.log (str, int, num, bool)

//2
const rings = 5;
console.log ('Olympic flag has ' + rings + ' rings');

//3
const x1 = 2;
const x2 = 3;
const x3 = 4;
console.log (x1+x2*x3);

//4
const a = 3;
const h = 5;
const s = 0.5*a*h;
console.log (s)

//functions

//1
/*let age = prompt ('Enter your age')
function isAdult (age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let result = isAdult (age)
if (result === true) alert ('Adult')
else alert ('Minor');
*/

//2
function mToCm (m) {
    cm = m * 100;
    return cm;
}

function mToInch (m) {
    inch = m * 39.37;
    return inch;
}

//3

function cubeOfNum (num) {
    cube = Math.pow (num, 3);
    return cube; 
}

//cycles 

//1
for (let i = 0; i <= 9; i++) {
    console.log (i);
}

for (let i = 1; i <= 10; i++) {
    console.log (i);
}

//2
for (let i = 1; i <= 10; i++) {
    console.log (Math.pow(i, 2))
}

//3
for (let i = 1; i <= 10; i++) {
    console.log (i * 9);  
}

//3*
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(i*j);
    }
}

//4
let sum = 0;
for (let i = 1; i <= 20; i+=2) {
    sum += i;
}
console.log (sum)


//5
for (let i = 25; i > 0; i--) {
    console.log (i)
}

//6
for (let i = 0; i <= 20; i+=5) {
    console.log (i)
}

//6*
for (let i = 1; i <= 20; i++) {
   if (i % 5 === 0) {
       console.log (i);
   }
}

//7
const x = [-2, -1,5, -1, 0, 0.5, 1, 1.5, 2];
const y = x.map (function(num) {
    return (-3*(Math.pow(num, 2)) + 5*num - 2);
})
console.log (y);

//8

/*const answer = prompt ('Solve: 2 + 2 * 2 = ');

while (answer != 6 ) {
    prompt ('Solve: 2 + 2 * 2 = ');
}
*/

//conditions
/*
//1
let result = prompt('Enter number');
if (result == 10) alert( 'Right!' );
//2
if (result > 5 && result < 15) alert ('Hello');
//2*
if (result > 5 || result < 10) alert ('Always true')

//3
let res = prompt ('What is the color of the grass?')
if (res !== 'green') alert ('You are wrong!') 
else alert ('You are right!')
*/
/*
//4
let weight = prompt ('Enter the weight of pizza in gr');
if (weight > 1000) {
    let price = ((weight * 30) / 100) - ((((weight * 30) / 100) * 3) / 100)
    alert ('Pizza costs ' + price);
} else {
let price = ((weight * 30)/100);
alert ('Pizza costs ' + price);
}
*/





