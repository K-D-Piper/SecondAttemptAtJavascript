/* 

// Welcome to my section of notes.
JavaScript is a language to be layered on top of an HTML page to cause more fun elaborate effects. 


The statements work as followed/as written 

"Statement + Declaration = Data Type " OR "Variable + variable name = data type "
    How you write these is through use of RESERVED WORDS (also called methods) which are prevously defined words in JavaScript, bascailly so you and your computer know what you want/what you're trying to do. 
        So in the end, how you'll basicilly write it is " Reserved Word + Variable Name = Data Type"

* Just to further clarify text above; the addition sign is just to show that these items need to be connected. They are not needed/reccommneded during the actual act of making code. 

// Reserved Words are the preset list of words that communicated the desired action of the variable. 
// Declaration are the named YOU give the item that needs the desired effect. 
// Data types are the only metrics that can be used. 

//Data Types. 
    Currently we are learning 5 data types. 
        Strings : "Strings" / 'Strings' : Quation Words/ words that need to be indiviualed and defined
        Numbers : 1- infinity : 
        Booleans: True/False: Booleans are special as while they also utilize conditons, they have logical operations that change the nature of the conditon as well. 
        Undefined: This is like a blank space word like ___ but in code form. 
        Null: This is like 0 but in code form. Same as above, this is a blank space word so something can be placed later. 

In early sages; JavaScript's language is written in forumals that will then be added together and connected/linked to the your page through use of "console.log()"
    // console.log () connects your coding page to webpage. At least at the start. 
    
*/

// JavaScript Instruction Day One 7/29/2024 

//
var hello = "world";
var num = 7;
var bool = true;
var undef= undefined;
var none = null;

// console.log(5);
// console.log(hello);
// console.log("world"); /*console.log(world) will not show up because it thinks world is a variable. But i don't understand what that means. */ //<-- QUESTION what does this mean??

/*As we are in the early stages of JS were going to be using console.log as a way to see our progess in the early stages. This will be what we use until we get to DOM manipulation*/

console.log (num);

num = 29

console.log(num);


//*MATH VARIABLES 
var foo; 

console.log(foo)

foo = 19;

console.log(foo + 4);

//? Concat

var textOne = 'Hello';

console.log(textOne + ' ' + 'World' + "Dude!")

//Bool variables 
//let 
//const 
//escape the character
//wrap with opposite quote 
//addition "+"
//subtration "-"
//division "/"
//mutiplication "*"
//increment "++"
//decrement "--"
//modules "%"

//const == IMMUTABLE
//CANNOT CHANGE INFOMATION OF CONST;
const bar = "You can not change me";

//bar = 8 (didn't / wouldn't work)

console.log(bar)

//let = its accessible based on his scope
let bar2 = 'You can change me!'

bar2 = 10

console.log(bar2)

//Dealing with quotes in strings
let stringQuote = "You aren't special"
console.log(stringQuote)

//escaping the quote ( Q: WHAT ARE THESE?)
let escapeQuote= 'You aren\'t special'
console.log(escapeQuote)

//increments and decrements ( Q: WHAT ARE THESE?)
let num3 = 0
console.log(num3)
num3++;
console.log(num3)
num3--
console.log(num3)

// setting multi-variables
let baz, baz2, baz3
baz3 = 8
console.log("I'm Baz3" + baz3)

//Template Literals 
console.log(`Hello Baz2 ${baz3}`)

//DAY ONE QUIZ 7/29/2024
//!TEMPATURE CONVERTER 

//F = C * 9/5 +32
// CONSOLE.LOG(ANSWER)

let ctemp = 30
let ftemp = ctemp * 9/5 + 32
console.log(ftemp)

//! Age calculator 
//subtract the birth year from the current year to get the age. 
// Console.log(answer)

let currentyear = 2024
let birthyear= 1998
let age = currentyear - birthyear
console.log(age)

//TODO Personal Greeting
//? Input the user's name. 
// console out a personalized greeting message. 

let greeting = "Heyyy. Want some cake?"
console.log(greeting)

//TODO Tip Calcualtor 
//? Input the user to input the bill amout and the tip percetage.
// Calcuate the tip amout and console the total bill.

let billamount = 50
let tipPercertage = .20
let tip = billamount * tipPercertage
console.log(tip)
let finalbill = billamount + tip
console.log(finalbill)

//TODO Age Calculator in days
//Ask the user to input their age in years
//Multiply the age in years by 365
//console the total days 

let MyAge =  25
let Days = 365
let TotalDays = MyAge * Days
console.log(TotalDays)

//! END OF DAY ONE 

//Day 2 7/31/2024 (Arrays and Conditions/ Decisions)
//creating an array 
let fruits = ["apples" , "strawberry" , "cherry" , "orange"];
//variables can work as index nums
let kid = 1

console.log(fruits)
console.log(fruits[3])
console.log(fruits[kid])

//updating array data 
fruits[1]= "blueberries"
console.log(fruits)



/*
// JavaScript Quiz. 8/2/2024

//Q1
let fruits = ["apple" , "banana" , "cherry"]
console.log(fruits[1])

//Q2
let numbers = [1 , 2 , 3 , 4, 5]
console.log (numbers[0]+ numbers[2])

//Q3  (come back)

let languages = ["JavaScript" , "Python" , "Java"]
let language.push = ["Ruby"]
console.log(languages[1,4,3])


//Q4

let age = 20
    
if (age >= 18) {
    console.log("Eligible to Vote")
} else{
    console.log("Sorry Kid. Not Eligable to Vote. ")
}

//Q5

let cities = ["New York" , "Los Angeles" , "Chicago"]
let lastcity = cities[2]
console.log(lastcity)

//Q6 
let x = 7

if (x > 5 || x < 10) {
    console.log ("In range")
} else {
    console.log ("Out of range")
}


*/