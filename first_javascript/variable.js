'use strict';

// var (don't ever use this)  var hoisting (move,declaration from bottom to top)

console.log('my'+'cat');

console.log(`string literals: 1+2 = ${1+2}`);


//logical operators

const value1 = false;
const value2 = 4<2;

console.log(`or: ${value1 || value2 || check()}`);    //심플한 애들 먼저 놔주고, 무거운 애들은 제일 뒤에 배치합시당
console.log(`and: ${value1 && value2 && check()}`);
function check(){
    for (let i = 0 ; i < 10 ; i++){
        //wasting time
        console.log('day');
    }
    return true;
}

// //loose equality, with type conversion
// console.log(stringFive == numberFive);
// console.log(stringFive != numberFive);
//
// //=== strict equaltiy, no type conversion
// console.log(stringFive === numberFive);
// console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);

// let num = 0;
// while(num <= 10 ){
//     if (num % 2 === 0){
//         console.log(num);
//         num++;
//     }
//     else{
//         num++;
//         continue;
//     }
// }
for ( let i = 0 ; i < 11; i++){
    if ( i % 2 !== 0){
        continue;
    }
    console.log(i);

}

// let num = 0;
// while(true){
//     console.log(num);
//     num++;
//     if (num > 8){
//         break;
//     }
// }


//function은 object 이다

function printHello(){
    console.log('Hello')
}

printHello();

function log(message){
    console.log(message);
}

log('Hello@');
log(1234);


function print() {
    console.log("hi")
}
//
// const print = function(){
//     //anonyous function (이름이 없는)
//     console.log('print');
// };
print();
const printAgain = print;
const sumAgain = print;

printAgain();
const sumAgain = sum;

console.log(sumAgain(1,2));


//Callback function using funtion expression

function randomQuiz(answer, printYes, printNo ){
    if (answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
//annonymous function
const printYes = function(){
    console.log('yes');
};

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print(){
    console.log('no');
    print(); //recursion 은 꼭 필요할 때만 쓰도록 한다.
};

randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);


//Arrow function
//always anonymous

// const simplePrint = function(){
//     console.log('simplePrint');
// };
//

const simplePrint = () => console.log('simplePrint');
const add = (a,b) => {
    return a*b;
};


//IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log("IIFE");
})();



//object-oriendted programming
//class : template
//object: instance of a class
//javascript class

class Person {
    //constructor
    constructor(name,age){
        //fields
        this.name = name;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value;
    }

    //methods
    speak(){
        console.log(`${this.name}:hello`);
    }
}

const ellie = new Person('ellie',20);



// class

class Student{
    constructor(firstname,lastname,age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0  ? 0 : value;
    }
}

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

const fruits = ['apple','banana'];

//forEach
fruits.forEach((fruits) => console.log(fruits));


//push pop  , unshift shift
//splice
fruits.splice(1,1,'grape');
//concat
//searching

