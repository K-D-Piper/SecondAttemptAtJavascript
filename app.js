/* 

// Welcome to my section of notes.
JavaScript is a language to be layered within an HTML page to cause more fun elaborate effects. 


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
//INSTRUCTION 

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

//Adding new item to an array
let officeCharacters = ["Michael" , "Jim" , "Dwight"]
console.log(officeCharacters)

//.push = adds new data at the end of an array
officeCharacters.push("Andy")
console.log(officeCharacters)

//.pop = removes the last item in the array
officeCharacters.pop()
console.log(officeCharacters)

//.unshift = adds a new item to the front of the array
officeCharacters.unshift("Dwight")
console.log(officeCharacters)

//.shift = removes the first item in the array 
officeCharacters.shift()
console.log(officeCharacters)

//.length = gives us the total number of items in a array
console.log(officeCharacters.length)

//REFERENCE/RESOURCE : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects 

//QUIZ (7/31/2024)

//! Access Array Elements
//TODO Define an array of items 
let items = ["apple" , "banana" , "cherry" , "date", "elderberry"]

//TODO Access specific elements
let firstItem = items[0]
let thirdItem = items[2]
let lastItem = items[4]

//Output the results
console.log("Items: " + items)
console.log("First Item: " + firstItem)
console.log("Third Item: " + thirdItem)
console.log("Last Item: " + lastItem)

//! List of Favorite Movies
//TODO Define an array of favorite movies
//Output each movie individually

fav_movies = ["Barbie Movie", "Coraline", "Princess & the Frog"]
console.log(fav_movies[0])
console.log(fav_movies[1])
console.log(fav_movies[2])

//Sum of Array Elements
//TODO Define an array of numbers
//TODO Calculate sum of the numbers 
//Output the results

let count_array = [3, 6, 9, 12, 15]
let count_sum = 0

for (let i = 0; i< count_array.length; i++) {
    count_sum += count_array[i];
}
console.log(count_sum)

//! Concatenate Strings in an Array 
//TODO Define an array of strings
//TODO Concateate the strings
//Output the result 

let cat_string = ["cats " , "are " , "cute ", "but ", "evil "]
console.log(cat_string[0]+cat_string[1]+ cat_string[2] + cat_string[3] + cat_string[4])

//! Update Array Elements
//TODO Define an array of items
let colors = ["red" , "blue" , "green" , "yellow", "purple"]
//TODO Update
//? green to cyan 
//? purple to orange 
//Output the result 

colors[2] = "cyan"
colors[4] = "orange"
console.log(colors)

//QUIZ ENDED 
//INSTRUCTION CONT. 7/31/2024

//PRATICE PROBLEMS SECTION 
//! List of Favorite Movies

//TODO Define an array of favorite movies
let movies = ["Treasure Plant" , "The Nice Guys" , "500 Days of Summer"]
// Output each movie indivually 
console.log(`Movie One : ${movies[0]}`);
console.log("Movie One : ${movies[0]}");
console.log(`Movie One : ${movies[1]}`);
console.log(`Movie One : ${movies[2]}`);

//! Sum of Array Elements
//TODO Define an array of mumbers
let nums = [8, 20, 2, 10, 12]
//TODO calucalte sum of the numbers
let sum = nums[0] + nums[1] + nums[2] + nums[3] + nums[4]
//Output the result
console.log(sum)

//! Concatenate Strings in an Array 
//TODO Define an array of strings 
let words = ["There are" , " only happy accidents " , " no mistakes", "- Bob Ross"]
//TODO Concatenate the strings 
let sentence = words[0] + words[2] + words[1] + words[3]
//Output the results 
console.log(sentence)

//! Update Array Elements

//Todo Define an array of items
let colorz = ["red" , "green" , "yellow" , "purple"]
//TODO Update 
//? green to cyan 
//? purple to orange 



//Random numbers
let rng = Math.floor(Math.random() * Math.floor(colorz.length))

let number1 = Math.floor(2)
console.log(number1)

colorz[2] = "cyan"
colorz.pop()
colorz.push("orange")
//Output the results 
console.log(colorz)

/*

Boolean Operators 
    == means "is equal to"
    === means "is strictly equal to"
    != means "is not equal to" (! means NOT)
    > means "is greater than"
    < means "is less than"
    >= means "is greter than or equal to"
    <= means "is less than or equal to"

*/ 

//Decisions / Conditions 


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
