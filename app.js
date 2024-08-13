/* 
// Welcome to my section of notes.
JavaScript is a language to be layered within an HTML page to cause more fun elaborate effects. 


The statements work as followed/as written 

"Statement + Declaration = Data Type " OR "Variable + variable name = data type "
    How you write these is through use of RESERVED WORDS (also called methods) which are prevously defined words in JavaScript, bascailly so you and your computer know what you want/what you're trying to do. 
        So in the end, how you'll basicilly write it is " Reserved Word + Variable Name = Data Type"*

* Just to further clarify text above; the addition sign is just to show that these items need to be connected. They are not needed/reccommneded during the actual act of making code. 

// Reserved Words are the preset list of words that communicated the desired action of the variable. 
// Declaration are the named YOU give the item that needs the desired effect. 
// Data types are the only metrics that can be used/ measured

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
console.log(colorz[rng])

/*

Boolean Operators 
    == means "is equal to"
    === means "is strictly equal to"
    != means "is not equal to" (! means NOT)
    > means "is greater than"
    < means "is less than"
    >= means "is greter than or equal to"
    <= means "is less than or equal to"

    Boolean Logical Operators 

    && means "and"
    || means "or"
    ! means "not"

*/ 

//Decisions / Conditions 

//! CONDITIONS 

let boo = true;
console.log (boo)

/*
"==" - "is equal to"
*/
let bbar = 4 == 5-4

console.log(4 == 2+2);

//Strictly Equals to "==="
let boo2 = "4"
let boo3 = 4
let boo4 = "four"

console.log(boo2 == boo3) //true

console.log(boo2===boo3) //false 

//Not equal to "!="

console.log(boo3 != boo4); //true

//Greater Than ">"

console.log(boo3 > 6) //false 

//Less than "<"
console.log(boo3 < 6) //true 

//Less than or equal to "<=" 
console.log(boo4 <= 4) ; //true

//Greater than or equal to ">="
console.log(boo3 >= 4); //true


/* 
Boolean Logical Operators 

&& means "and"
|| means "or"
! means "not"
*/ 

//AND = "&&"
console.log("Double Ampersands:" + 4==4 && 3==2) //false 

//OR = "||"
console.log("Double Lines: " + 4 ==4 || 3==2) //false 

// NOT = "!"

console.log("Exclimation Point :" + (!true)) //false 

// If Statements (if the condition is true, run the code)

/*
If (condition){
    //do stuff
};

*/

if (boo3 == 4){
    console.log("Hey. I'm number 4")
};

// If/else (if the first condition isn't true. Run the else)

/* 
If (condition) {
    // do stuff
} else {
    //do something else
}
*/

let amHungry = true ;

if (amHungry == true) {
    console.log("Lets eat! I want Chicken nuggies")
} else {
    console.log("Let's keep coding! Yay!")
}


// else/if statment
/*
if (condition) {
    //do stuff    
} else if (another condition) {
    //do other stuff
}
    else { 
    //do something else     
}
*/
// Else if structure 

let howHungry = 50;

if( amHungry === true && howHungry >= 75) {
    console.log("I'm so hungry i can eat a horse")
} else if (amHungry === true && howHungry >= 75) { 
    console.log("I'm hungry enough to eat cheeze-its")
} else if ( amHungry === false && howHungry >=25) {
    console.log("I'm depressed.")
}else {
    console.log("I'm not that hungry dude")
}

// switch statements 
/*
switch (expression) {
case case1:
    //do this
    break;
case case2:
    //no, do this
    break;
case case3:
    //nevermind boht of those cases, do this!
    break;
default:
    //do this 
}
*/

switch (amHungry == true) {
    case howHungry >= 75:
        console.log ("I'm so hungry i can eat a horse")
        break;
    case howHungry >= 25: 
        console.log("I'm hungry enough to eat cheeze-its")
        break;
    default:
        console.log("I just want to eat to eat")
}

// DAY 2 (7/31/2024) END 
//DAY 3 (8/1/2024) START
//Instruction 

/*
//Falsey Values  (if you ever write these they'll always be seen as false)

- false
- 0
- -0
- 0n
- "" / '' (empty strings)
- null
- undefined
- NaN

*/

//CONITIONALS PRATICE. QUIZ (8/1/2024)

//! Favorite Fruit Checker (1)
//TODO define an array of favorite fruits
//TODO define a variable for the fruit to check 
//* Check if the fruit is in the array and output the results

let best_fruits = ["strawberries" , "cherries", "kiwis"];
best_fruits = ["pickles"]

if(best_fruits == true){
    console.log("Gimmie dat fruit!")
} else {
    console.log("You can keep that sad fruit. ")
}

//! Grade Categorizer (2)
//TODO Define a varable for the grade
//TODO Catergorize the grade
//* Output the result

//(needs double check/fix)
let grade = [true, 50]

switch (grade == true && grade == 100){
 case grade >= 90: 
    console.log("A")
    break;
 case grade >= 80: 
    console.log("B")
    break;
 case (grade >= 70):
    console.log("C")
    break;
 case (grade >= 60):
    console.log("D")
    break;
 case (grade <= 59):
    console.log("E")
    break;
}

//! Day of the week checker (3)
//TODO Define an array of days of the week
//TODO Define a variable for the day to check
//TODO Check if the day is a weekend or weekday 
//* Output the results 

let days_of_week = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
days_of_week = "Saturday"

if (days_of_week == [ "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday"]){
    console.log( "Weekday")
} else {
    console.log("Weekend")
}

//! Tempature Checker (4)
//TODO Define a variable for the tempature 
//TODO Catagorize the tempature and 
//* output the result 

let temp = 92

if (temp >=90){
    console.log("it's hot")
} else if (temp <= 89 && temp >= 60){
    console.log("it's nice")
} if (temp <=59 ) {
    console.log("it's cold")
}

//! Number Sign Checker (5)
//TODO Define a variable for the number 
//TODO Check the sign of the number 
//* output the result 

let sign_num = 50

if(sign_num ===50) {
    console.log( "Thats a good sign")
} else {
    console.log("Thats not a good sign.")
}

//QUIZ SECTION DAY 2 (8/1/2024) END
//INSTRUCTION DAY 2 cont. (8/1/2024) START

//! PSUEDOCODE DEBUGGER BREAKIKNG DOWN PROBLEMS

//! Favorite Fruit Checker
//TODO Define an array of favorite fruits
//? SET array favFruit = [item1, item2...]
const favFruits = ["pineapple" , "orange" , "strawberry" , "grapes"]
//TODO Define a variable for the fruit to check 
//? Set string fruit = "item"
let fruit = "orange"
//* SET 3 Check IF the fruit is in the array
//console.log(fruit == favFruits[0]);
debugger
//*  and OUTPUT the RESULT 
//IF statement will be invovled 
//? checking to see if VAR fruit is on the VAR favFRUIT list;
if(fruit == favFruits[0] || fruit == favFruits[1] || fruits == favFruits[2] || fruits ==favFruits[3]){
    console.log("Hey I'm a favorite food!")
} else {
    console.log("Yuck, not my taste!")
}
// if (fruit == favFruits[0]) {
//  console.log("Hey I'm an orange fruit!")

//} else if("Hey I'm a orange fruit!")

// } else {
//  console.log("Yuck, not my taste!")

//}

//! Grade Categorizer 
//TODO Define a variable for the grade
//? SET INT gradeNum = 0;
debugger
let gradeNum = 78;

//TODO Categroize the grade 
//? if VAR gradeNum is BETWEEN 100 and 90 = A;
//? ELSE IF VAR gradeNum is Between 89 and 80 = B;
//? ELSE IF VAR gradeNum isi BETWEEN 79 and 70 = C;
if (gradeNum >= 90 && gradeNum <= 100) {
    console.log ("You've recieved an A!");
} else if (gradeNum > 80 && gradeNum <= 89) {
    console.log("You've recieved a B!");
} else if ( gradeNum > 70 && gradeNum <=79){
    console.log("You've recieved a C!");
} else if (gradeNum > 60 && gradeNum <= 69) {
    console.log ("You've recieved a D!");
} else {
    console.log("You've failed!")
}

//* output the result 
//? console.log (GRADE LETTER)

//! Day of the week Checker 
//TODO Define an array of days of the week 
// SET array dayOfTheWeek = [];
const daysOfTheWeek = ["sunday" , "monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday"]
//? SET string day = "Monday";
let day = "monday"
//TODO Check if the day is a weekday or weekend
//? IF statement?
//? Conditions: 
//? - Day of a week 
//? - weekends: "saturday" || "sunday":
//? - weekdays: "monday" || "tuesday" || "wednesday" || "thursday" || "friday"

debugger
switch (day) {
    case day == daysOfTheWeek[0] || day == daysOfTheWeek[6]:
    console.log("It's the weekend");
    break;
    case day == daysOfTheWeek[1] || day == daysOfTheWeek[2] || day == daysOfTheWeek[3] || daysOfTheWeek[4] || daysOfTheWeek[5]: 
    console.log("It's the Weekday! D:");
    break;
    default:
        console.log("This day doesn't exist??");
}




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
