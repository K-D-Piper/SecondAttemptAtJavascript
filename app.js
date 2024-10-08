/* 
// Welcome to my section of notes.
JavaScript is a language to be layered within an HTML page to cause more fun elaborate effects. 


Early Statements work as followed/written 

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
num3-- // MIKEL WROTE THIS num3 - 1
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

//! DAY 1 (7/29/2024) END

//! NOTE: (7/30/2024) NO RECORDING 

//Day 2 (7/31/2024) (Arrays and Conditions/ Decisions) START
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

//QUIZ DAY 2 (7/31/2024)

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

let fav_movies = ["Barbie Movie", "Coraline", "Princess & the Frog"]
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

// DAY 2 (7/31/2024) QUIZ END
// DAY 2 (7/31/2024)INSTRUCTION CONT. 
//PRATICE PROBLEMS SECTION GO OVER/ REVIEW

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

// DAY 2  (7/31/2024) REVIEW/INSTRCTION END 
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

//QUIZ SECTION DAY 3 (8/1/2024) END
//INSTRUCTION DAY 3 cont. (8/1/2024) START

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
//debugger
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
//debugger
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

//debugger
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

//! Temperature Checker
//TODO Define a variable for the temerature 
//? SET INT currentTemp = NUM;
let currentTemp = 70;
//? If Structure 
//? 3 conditions:
//? HOT - currentTemp >=85
//? just right - currentTemp < 85 AND currentTemp <= 60
//? COLD - currentTemp < 60

if (currentTemp >= 85) {
    console.log("Aye it's way too HOT brother!")
} else if (currentTemp < 85 && currentTemp >= 60) {
    console.log("Keep it like this Dude! Just right!")
} else {
    console.log("I'm freezing. Global warming isn't real!")
}
//*output the result 

//! Number Sign Checker
//TODO Define a variable for the number
//? SET INT num = NUMBER ;
let numz = 9;
//TODO Check the sign of the number
//? Switch Statement 
//? 3 conditons:
//? If num > 0
//? If num == 0;
//? if num < 0;

//debugger
//switch(num){
//    case num> 0:
//        console.log("This is a postive Number!");
//        break;
//    case num == 0:
//        console.log("This is a zero number");
//        break;
//    case num < 0:
//        console.log("This number is negative!");
//        break;
//}

if(numz > 0) {
    console.log("This is a positve Number!");
} else if (numz === 0) {
    console.log("This is a 0 number")
} else if (numz < 0) {
    console.log("This number is negative!")
}
//* output the result 

//DAY 3 (8/1/2024) REVIEW/INSTRUCTION END

//DAY 4 (8/2/2024) START
/*
Welcome to the world of loops! Don't understand? Read line again.

Loops are another tool in a JavaScript coder's toolbox. 

Loops work by repeating a sequence of instrcutions until a condiion is met. *
    (But NotesWriter! I don't know what that means.) Okay, so to better understand, read that opening line.

In JavaScript there are many different kinds of statements and "for loop" is just another kind. (there are other kinds of loops statments too!)
    A "for loop" statemnet is written/structured as followed
        for (initalization ; condition ; iteration) {
            //do stuff
        }
            // parentheses meanings...
            Initalization: Sets a counter. Think "START AT ___/ START HERE" (var i = 0 )
            Condition : a Boolean expression; if the condion is true the code block will run (i <= 10 )
            Iteration: the steps to move throughout the dataset (Basically, how many times do you want this to repeat) (i++)
                //writers note. the opposite version of an incrament (which is the above i++) is a decrament (i--) 

* Writers Note. The next  lines are my understanding (so it can be wrong) but is as followed 
    Initalizaton: Starting point.
    Conditon : Condition to be met
    Iteration: How many around

    So one can also read it as 
        for (what we have ; what were checking; how many times were checking it) {
            //if what were checking is true run this code / run whats inside the brackets*  //writers note. These are brackets. {brackets}
        }

But the point of loops is to make one's code reusable. Instead of writing something a million times and checking it a million times. Write a loop once and the computer will check it a million times (or as many times as you want) for you and on its own. 
*/
//MY EXAMPLE (plz check for correctness)

let Line = "Welcome to the world of loops! Don't understand? Read line again."

//BTW i is the most commonly used loop phase because its short for "initization" which is the thing your starting point. Initilization just means assinging value to a variable/something 
for (let i = 0; i < 1 ; i++) {
    console.log(`${i}Line + " 1"`)
}
//Read above as followed. //For ( initizlation to equal 0 ; initilztion is less than 1 ; initization should be checked/ran once then again.) 

// OR 
//debugger
for ( let understanding = 0; understanding < 1 ; understanding++) {
    console.log(`${understanding}Line + "2"`)
}
//read above as followed. //for the case of ( let understanding be equal to 0 ; and understanding is less than one; understanding should be ran once then again.)
// DAY 4 (8/2/2024) ACTIVE INSTRUCTION LOOPS 


for (let i = 0 ; i < 10 ; i++){
    console.log(`I am current ${i} and I am still under 10`);
}
//so what the code above is saying is the console is reading and increasing the variable until it reaches 10 then will stop. 

//Example of how loops are used. Say I'm a teacher and I want to get a mean of the total of the class
let grades = [78 , 89, 35 , 90, 76] ;
let sumz = 0;

console.log(grades.length)

for( let i = 0; i < grades.length; i++){
    //console.log(grades[i])
    sumz += grades [i];//+= will add to the current numbers of the variable 
}

console.log(sumz);
console.log(sumz / grades.length) //reads sum divided but tests

const favFruitz = ["pineapple" , "orange" , "strawberry" , "grapes"]

let fruitz = "strawberry"

//debugger
for (let i = 0; i < favFruitz.length ; i++) {

   if(fruit == favFruitz[i]) {
    console.log ("I'm in da Basket!")
    break;
   } else {
    console.log(" Not in the string")
   }
}

for (let i= 0 ; i < favFruitz.length ; i++) {
    if (favFruitz[i] == "orange") {
        favFruitz[i] = favFruitz[i].toUpperCase()
        console.log(favFruitz);
    } else {
        console.log("YOU'RE NOT MY ORANGE")
    }
}

// JavaScript Quiz. 8/2/2024

//JavaScript Quiz
 
//Question 1:
//Write a line of code that declares an array called fruits with the elements "apple", "banana", and "cherry". Then, log the second element of the array to the console.
 //Q1
let quizFruits = ["apple" , "banana" , "cherry"]
console.log(quizFruits[1])


//Question 2:
//Write a line of code that declares an array called numbers with the elements 1, 2, 3, 4, and 5. Then, create a variable sum that is the sum of the first and third elements of the array, and log sum to the console.
//Q2
let numbers = [1 , 2 , 3 , 4, 5]
let varsum = numbers[0] + numbers[2]
console.log (varsum)
 
//Question 3:
//Write a line of code that declares an array called languages with the elements "JavaScript", "Python", and "Java". Then, change the second element of the array to "Ruby" and log the entire array to the console.
//Q3 

let languages = ["JavaScript" , "Python" , "Java"]
languages[1] = "Ruby"
console.log(languages)

 
//Question 4:
//Write a line of code that declares a variable age and assigns it the value 20. Then, use an if-else statement to check if age is greater than or equal to 18, and log "Eligible to vote" if true, and "Not eligible to vote" otherwise.
//Q4

let qAge = 20
    
if (qAge >= 18) {
    console.log("Eligible to Vote")
} else{
    console.log("Sorry Kid. Not Eligable to Vote. ")
} 

//Question 5:
//Write a line of code that declares an array called cities with the elements "New York", "Los Angeles", and "Chicago". Then, create a variable lastCity that holds the last element of the array, and log lastCity to the console.
 //Q5

let cities = ["New York" , "Los Angeles" , "Chicago"]
let lastcity = cities[2]
console.log(lastcity)

//Question 6:
//Write a line of code that declares a variable x and assigns it the value 7. Then, use an if-else statement to check if x is greater than 5 or less than 10, and log "In range" if true, and "Out of range" otherwise.
//Q6 
let x = 7

if (x > 5 || x < 10) {
    console.log ("In range")
} else {
    console.log ("Out of range")
}

// DAY 4 (8/2/2024) END 
// DAY 5 (8/5/2024) START

//For loop Structure 
//for (Initialization; condition; iteration) {

//}
//?Ex. Look below vvv

for ( let i = 0 ; i < 5; i++) {
    //We can utilize the variable i in for loop arguements
    // "i" variable number is changing each loop bc of the interaction argument (i++) 
   console.log("Monday is an Amazing day to start the week!"+ i); //purpose of demostation is to show the many ways one can find dynamic data (the the future) 
};

let seasons = ["fall" , " winter" , "summer" , "spring"];
let favSeason = "fall"
//Display all seasons on teh websites console
for ( let i = 0; i < seasons.length ; i++){
    //we call array strings by variables index.
    //ex. seasons[1], seasons[2]...
    console.log(seasons[i]);
}

for (let i = 0 ; i < seasons.length ; i++){
    if(favSeason == seasons[i]){
        console.log("Thats my favorite season!");
        break;
    } else {
        console.log("skip")
    }
}


//QUIZ DAY 5 8/5/2024

//! List of Favorite Movies (1) //Check 
//TODO Define an array of favorite movies //Check 
//* Output each movie individually //Check 
 
fav_moviez = ["Barbie Movie", "Coraline", "Princess & the Frog"]

for (let i = 0; i < fav_moviez.length ; i++){
    console.log(fav_moviez[i])
}

//! Sum of Array Elements (2)
//TODO Define an array of 5 numbers //Check 
//TODO Calculate sum of the numbers 
//* Output the result
//! Update Array Elements
 
let numArr = [ 0, 3, 6, 8, 9]; //should be 26
let numArrSum = 0;

for ( let i = 0; i < numArr.length; i++){
    numArrSum += numArr[i];
}
    console.log(numArrSum)

//TODO Define an array of items (3)
let colorzz = ["red", "blue", "green", "yellow", "purple"];
//TODO Update
//? green to cyan
//? purple to orange
//* Output the results

colorzz[2] = "cyan"
colorzz[4] = "orange"

for (let i = 0 ; i < colorzz.length ; i++ ){
    console.log(colorzz[i])}

//! Grade Categorizer (4)
//TODO Define a array of 5 grade numbers
//TODO Categorize each grade
//* output each result

let mahGrades = [30, 50, 75, 100, 80]

for (let i = 0 ; i < mahGrades.length ; i++)
{
    if (mahGrades[i] <= 60) 
        {console.log ( "Try Again Sport. E")}
    else if (mahGrades[i] >= 60 && mahGrades[i] < 70)
        {console.log("Good Try, but maybe one more time. D" )}
    else if (mahGrades[i] >= 70 && mahGrades[i] < 80)
        {console.log("Great Try, but maybe one more time. C" )}
    else if (mahGrades[i] >= 80 && mahGrades[i] < 90)
        {console.log("Great Job! Gotta B." )}
    else if (mahGrades[i] >= 90 && mahGrades[i] <= 100)
        {console.log("Certifed Genius. Good Job A maker." )}
    else if ( mahGrades[i] > 100)
        {console.log ("Overachiever's Award")}
}

 
//! Day of the Week Checker(5)
//TODO Define an array of days of the week (check)
//TODO Define a variable for the day to check 
//TODO Check if the day is a weekday or weekend
//* output the result
 
let mahDays = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]

mahDays = "Wednesday"

for ( let i = 0 ; i < mahDays.length ; i++)
{
    if ( mahDays[i] == "Saturday" || "Sunday") {
        console.log("Weekend coding? Weirdo. Go have fun!")
    } else {
        console.log("Ha. Have a good week coding! Weekday Warrior")
    }

}
//! Temperature Checker(6)
//TODO Define a array of 5 temperature numbers
//TODO Categorize the temperatures in 3 types (HOT, COLD, just right)
//*output the result
 
let mahTemps = [ 79, 101, 92, 75, 59]

for ( let i = 0; i < mahTemps.length ; i++) 
{
    if (mahTemps[i] >= 80) {
        console.log("Its too hot for this")
    } else if (mahTemps[i] <= 79 && mahDays[i] >= 69){
        console.log("just right")
    } else {
        console.log("Too Cold. Sweater Weather")
    }
}



//! Number Sign Checker(7)
//TODO Define a array of 5 numbers
//TODO Check the sign of the number
//* output the result

const SignNumbers = [ -9 , 6 , 55, -8, 0]

for (let i = 0; i < SignNumbers.length ; i++) 
{
    if (SignNumbers[i] >= 1){
        console.log("POSTIVE NUMBER")
    } else if (SignNumbers[i] === 0) {
        console.log("THATS ZERO")
    } else {
        console.log("NEGATIVE GHOSTRIDER")
    }

}

//QUIZ DAY 5 (8/5/2024) END
//DAY 5 (8/5/2024) ACTIVE INSTRCTION. QUIZ REVIEW START 
//Class Demonstrations 

//Bianca's Movie List 
let favMovies = ["Alen Covenant" , "Happiness for Beginners" , "Irish Wish", "Turbo"];

for (let i =0 ; i< favMovies.length; i++) {
    console.log(favMovies[i]);
}

//Bryan's Sum of Array 
const Numbers = [ 23,54, 87 , 19, 45];
let Sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum+= Numbers[i];
}//end of loop

console.log(Sum)

// Kelvin's Update of Array Elements
let Colors = ["red" , "blue", "green" , "yellow" , "purple"];
for (let i =0 ; i < Colors.length; i++){
    if(Colors[i] === "green"){
        Colors[i] = "cyan"
        console.log(Colors[i])
    } else if (Colors[i] === "purple"){
        Colors[i] = "orange"
        console.log(colors[i])
    }else{ 
        console.log(Colors[i])
    }
}

//Bryan's Array Update
for (let i = 0; i < Colors.length; i++){
    Colors.splice( 2 , 1, "cyan");
    Colors.splice (4 ,1, "orange"); 
}// end for loop 
    console.log(Colors)
//WritersQuestions. 1) how does the above work? (like with the extra numbers) 2) Explain splice again 

//Christopher's Grade Checker 
let Grades = [96 , 87, 75, 62, 54]

for (let i = 0; i < Grades.length; i++){
    if (Grades[i] <= 100 && Grades[i] >= 90){
        console.log(`Great Job!! You made an A!!`)
    } else if (Grades[i] <=89 && Grades[i] >=80) {
        console.log(`Good you made a B!`)
    } else if ( Grades[i] <= 79 && Grades[i] >= 70){
        console.log(`You passed withi a C.`)
    } else if (Grades[i] <= 69 && Grades[i] >= 60){
        console.log("You have to study more. You made a D.")
    } else { 
        console.log("Better luck next time. You failed this test...")
    };
};

//Nicole's Grade Checker

// #region Grade Categorizer
let Gradez = [95 , 82 , 62, 55, 74];
//created an empty array to store teest score(grade) and grade (grade range)
let GradeCategory = [];

for (let i = 0 ; i < Gradez.length; i++){
    let Grade = Gradez[i]; //created var to store my arr 
    let GradeRange; //number range in which test scores will be sorted in

    if(Grade >= 90) {
        GradeRange = "A";
    } else if (Grade >= 80) {
        GradeRange = "B";
    } else if (Grade >= 70){
        GradeRange = "C";
    } else if (Grade >= 60){
        GradeRange = "D";
    } else {
        GradeRange = "F";
    }
/* categorize the grade based on the "GradeRange" grade : num/ GradeRange : "A"
created a new object with two properties ex grade(num): grade(A).push updates the array and adds the new elements grade/GradeRange to teh array */
    GradeCategory.push({Grade: grade, GradeRange: GradeRange}); //Updates array 
}
    console.log(GradeCategory);//reads like this "0:{ grade: 95}, GradeRange: 'A' "
    
//Caleb's Grade's Checker
//Ex. 4
//Grade Categorizer 
//ToDo Define a array of 5 grade numbers 
//TODO categorize each grade 
//output each result 

let gradenumbers = [ 54, 96, 82, 73, 101, "bruh"];

for (let i = 0; i < gradenumbers.length; i++) 
{
    switch(true)
    {
    case (gradenumbers[i] <= 100 && gradenumbers[i] >=93):
        console.log(`${gradenumbers[i]} is an A.`);
        break;
    case (gradenumbers[i] <= 92 && gradenumbers[i] >=84):
        console.log(`${gradenumbers[i]} is an B.`);
        break;
    case (gradenumbers[i] <= 83 && gradenumbers[i] >= 74 ):
        console.log(`${gradenumbers[i]} is an C.`);
        break;
    case (gradenumbers[i] <= 73 && gradenumbers[i] >= 64 ):
        console.log(`${gradenumbers[i]} is an D.`);
        break;
    case (gradenumbers[i] <= 63 && gradenumbers[i] >= 0 ):
        console.log(`${gradenumbers[i]} is an F.`);
        break;
    //defaults to this when the value at index i is not within 0-100 or the desired data type 
    default:
        console.log(`${gradenumbers[i]} is n ot a valid score.`);
        break;
    }
}


//Chel's Day of the Week Checker

let week = ["Monday" , "Tueday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
let daysLeft = [5 , 4 , 3 , 2 , 1];
let dayz = "Tuesday";
for (let i = 0; i < week.length; i++){
    if (day == week [week.length -1] || day == week[week.length -2]) {
        console.log("It's the weekend!");
        break;
    } else if (day == week[i]){
        console.log(`It's ${week[i]}. Days left until the weekend: ${daysLeft[i]}!`);
        break;
    }
}

// Nicole's temp checker
//# region Temp Chekcer 
let tempatures = [32 , 75, 90, 60, 45]

let hotTemp = 85;
let coldTemp = 50;

for( let i = 0; i < tempatures.length; i++){
    let temp = tempatures[i]; //variable to store array 
    let category; //variable to store categories (i.e. hot, cold, just right)

    if (temp >= hotTemp){
        category = "HOT";
    } else if (temp <= coldTemp) {
        category = "COLD";
    } else {
        category = "just right";
    }
    console.log(` ${temp} F is ${category}.`);
}
//#endregion
// Christophers's Number Sign Checker
//TODO Define a array of 5 numbers
let NUM = [-8, 23, 0, 63, -72]
//TODO Check the sign of the number 
//* Output the result 
for (let i = 0; i < NUM.length; i++){
    if(NUM[i] < 0) {
        console.log("This is a negative number")
    } else if (NUM[i] == 0) {
        console.log("This number is a 0...")
    } else {
        console.log("This is a postive number!")
    };
};

//! Day of the Week Checker 
//TODO Define an array of days of the week 
let daysoftheweek = ['monday' , 'tuesday' , 'wednesday' , 'thursday' , 'friday' , 'saturday' , 'sunday']
//TODO Define a variable for the day to check 
let currentDay = 'monday'
//TODO Check if the day is a weekday or weekend
for (let i = 0; i < daysoftheweek.length; i++){
    //The other goal: Is let day inside of the LET daysoftheweek?
    //MAIN GOAL: Is it the weekend? Or a weekday?
    //what conditions can solve this?
    //weekend = saturday, sunday;
    //weekend = 'monday' , 'tueday' , 'wednesday' , 'thrusday' , 'friday' ;

    if (day == daysoftheweek[i]) {
        if (day == 'saturday' || day == 'sunday') {
            console.log("ITS THE WEEKEND!") 
        } else {
            console.log(`${day} is part of the weekday`)
        }
}
}
//* output the result 


//! Update Array Elements 
//TODO Define an array of items 
let Mcolors = ["red" , "blue" , "green" , "yellow" , "purple" , 'green' , 'blue'];
//TODO Update 
//? green to cyan 
//? purple to orange 

for (let i = 0; i < Mcolors.length ; i++){
    //We are trying to find a specific color 
    if (Mcolors[i] == 'green') {
        Mcolors = 'cyan';
    } else if (Mcolors[i] == 'purple') {
        Mcolors[i] = 'orange';
    }
    console.log(Mcolors)
}

// DAY 5 (8/5/2024) ACTIVE INSTRUCTION/ QUIZ REIVEW END

// DAY 6 (8/6/2024) QUIZ START (DO THESE / DO THIS)
//! For Loops Problems TWO

//!Multiples Checker (1)
//? Create a program that checks if the elements in an array of numbers are multiples of a specific number and displays a message accordingly.
//TODO Define an array containing a list of numbers.
//TODO Define a variable for the specific number to check multiples of.
//Output Results: Use console.log to display the results.
 
let MyMultiples = [8, 16, 7, 9, -3, 152, 1, 5, 555]
 
for (let M = 0 ; M < MyMultiples.length; M++)
{
    if( MyMultiples % 2 === 0)
    {
        console.log(`${M} is a multiple of 2`)
    } else 
    {
        console.log (`${M} is not a multiple of 2"`)
    }
}

//!Age Group Categorizer (2)
//? Create a program that categorizes the ages in an array as 'child', 'teen', 'adult', or 'senior' based on their values.
//TODO Define an array containing a list of ages.
//Output Results: Use console.log to display the age categories.
 
let MyAges = [3, 6, 9, 12, 15, 18, 21, 24, 80] 

for (let A = 0; A < MyAges.length ; A++)
{
    if (MyAges < 13) 
    {
        console.log("Child"[A])
    } else if (MyAges >= 13 && MyAges < 20) 
    {
        console.log("Teen"[A])
    } else if (MyAges >= 20 && MyAges < 60) 
    {
        console.log("Adult"[A])
    } else (MyAges > 60)
    {
        console.log("Senior"[A])
    }
}

 
//! Palindrome Checker (3)
//?Create a program that checks if the elements in an array of strings are palindromes and displays a message accordingly.
//TODO Define an array containing a list of strings.
//Output Results: Use console.log to display the results.

let MyPalidromes = ["poop" , "bop" , "pickles" , "bob", ")(()"]

for (let P = 0; P < MyPalidromes.length; P++)
{
    if (MyPalidromes.reverse === true)
    {
        console.log ("Thats a palidrome")
    } else 
    {
        console.log("Not a palidrome")
    }

}

//!Prime Number Checker (4)
//?Create a program that checks if the elements in an array of numbers are prime and displays a message accordingly.
//TODO Define an array containing a list of numbers.
//Output Results: Use console.log to display the results.
 
let PrimeNumbers = [1, 5, 17, 2, 8]

for (pr = 0; pr < PrimeNumbers.length; pr++)
{
    if (PrimeNumbers.reduce === 2)
    {
        console.log("Not a prime number")
    } else 
    {
        console.log("prime number")
    }
}

//!Uppercase Checker (5)
//?Create a program that checks if the elements in an array of strings are in uppercase and displays a message accordingly.
//TODO Define an array containing a list of strings.
//Output Results: Use console.log to display the results.

let UpperCaseList = ["AHH" , "pickles" , "CAKE", "Pink" , "leggo"]

for (let U = 0; U < UpperCaseList.length; U++)
{
    if (UpperCaseList === UpperCaseList.toUpperCase) 
    {
        console.log("Thats all caps")
    } else 
    {
        console.log ("Not all caps")
    }
}


//DAY 6 (8/6/2024) QUIZ END
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//DAY 6 (8/6/2024) ZACH'S ACTIVE INSTRUCTION START

//The different kinds of loops

//FOR 
for (let i= 0 ; i < 5 ; i++){
    console.log(`for i = ${i}`);
}

//WHILE 
let i = 0;
while (i < 5){
    console.log(`(while) i = ${i}`);
    i++;
}

//DO WHILE 

let j = 0;
do {
    console.log(`(do while) l = ${j}`);
    j++;
} while (j < 5);

let input; 
do {
    input = prompt("enter password: ");
} while (input != "123");
console.log("access granted");

//FOR EACH LOOPS 

//init
const Numberz = [1, 2 , 3, 4, 5];

//      //step 
Numberz.forEach((element) => {
    console.log(element);
});


//for version 
for (let i = 0; i < Numberz.length; i++){
    console.log(`(for version : ${Numberz[i]})`);
}

//NESTED FORS

//debugger;
// Outer loop, prints 12 months of year
for (let month = 1; month <= 12; month++){
    console.log(`month: ${month}`);

    //inner loop, prints 30 days of month
    for (let day = 1; day <= 30; day++){
        console.log(`\tday: ${day}`)
    }    
}
//DAY 6 (8/6/2024) ACTIVE INSTRUCTION END 

//DAY 7 (8/7/2024) ACTIVE INSTRUCTION/ QUIZ REVIEW START
// Classmate Quiz Answers Showcase START
//Nicole's #region Multiples Checker

let num_arr = [2 , 78, 5, 63, 3, 2, 8, 12, 34]

let multiple = 2;
let isMultiple = true;

for (i= 0 ; i <num_arr.length; i++){
    /* if the # in the arr is divisible by the multiple var without a remainder left over it's a multiple*/
    if(num_arr[i] % multiple === 0) {
        console.log(num_arr[i] + " is a multple of" + multiple);
    } else {
        console.log(num_arr[i] + " is not a multiple of " + multiple);
    }
}
//#endregion 

//Bianca's Age Categorizer 
//Question Two 
//Age Group Categorizer 
//Create a program that sections different ages into classes 

//TODO Define an array containing a list of ages 
//Output the results and use console.log to display them

let ages = [10 , 30, 28, 40, 16, 66, 79];

for (let i =0 ; i < ages.length; i++) {

    if (ages[i] <= 13) {
        console.log("You are a child");
    }
    else if (ages[i] <= 18) {
        console.log("You are a teen.");
    }
    else if (ages[i] >= 18 && ages[i] <= 59){
        console.log("You are an adult.")
    }
    else if (ages[i] >= 60){
        console.log( "You are a senior")
    }
};

//! Bryan's Palindome Checker 
//? Create a program that checks if the elemetns in an array of strings are palindromes and displays a message accordingly 
//TODO Define an array contianing a lisit of strings. 

//Output Results : use console.log to dispaly the resutls. 

const possiblePalindromes = ["kayak" , "pool" , "rotator" , "nun" , "spit"];
    for ( let i = 0 ; i < possiblePalindromes.length; i++) {
        let str = possiblePalindromes[i];
        let reversed ="";

        for (let j = str.length -1; j >= 0; j--){
            reversed +- str[j];
        } //end for loop 

        if(str === reversed) {
            console.log(`${str} is a palindrome!`)
        } else {
            console.log(`${str} is NOT a palindrome!`)
        }// end if else 
    }// end for loop 

// Nichole's Palidrome Checker 
// #region Palidrome Checker

/* a word, phrase, or sequence that reads the same backward as forward, e.g., madam or radar. */

let palidromeWords = ["radar" , "nurses" , "level" , "orange" , "madam"];

//Loop through each string in the array 
for (let i = 0; i < palidromeWords.lengh; i++) {

    /* Reverse the word in order to match 
        split turns the string inot chars/characters, reverse method reverses the letters and join method then joins the charaacters, then it's stored in the variable reverseWord */
    let reversedWord = palindromeWords[i].split("").reverse().join("");

    //Check if the origional strings =revrseString
    if (palidromeWords[i] === reversedWord) {
        console.log(`"${palidromeWords[i]}" is a palidrome.`);
    } else { 
        console.log(`"${palidromeWords[i]}" is not a palidrome.`);
    }
}

//#endregion 

//Sara's Prime Number Checker 

//A PRIME NUMBER ONLY DIVIDES EVENLY BY 1 OR BY ITSELF -- SO WE NEED TO CHECK EVERY NUMBER LESS THAN THAT NUUMBER TO SEE IF IT DIVISBLE. 

//DECLARE VARIBLES 
let numToCheck = [1, 7, 8, 6, 13, 50];

//FOR LOOP LOOKS THROUGH ARRAY 
for( let i = 0; i<numToCheck.length; i++){

    //isPrime IS DECLARED INSIDE OF FOR LOOP SO THAT IT WILL BEGIN AS TRUE EACH TIME THE LOOP RUNS-
        //OTHERWISE OCE IT IS SET TO FALSE IT WILL NOT RESET TO TRUE BEFORE THE NEXTR PASS ADN WE CAN RECEIVE BAD DATA
        let isPrime = true;
    //IF THE NUMBER AT TARGET LOCATION IS LOOSLY EQUAL TO 1- LOG THAT 1 IS NOT A PRIME NOR COMPOSITE 
    if( numToCheck[i] == 1) {
        console.log("1 is neither prime nor composite number.");
    }//END IF NUM == 1

    //ELSE IF THE NUMBER AT TARGET LOCATION IS GREATER THAN ONE WE ENTER A NESTED FOR LOOP 
    else if (numToCheck[i] > 1) {

        // WE START J AT  2 - THE LOWEST NUMBER AFTER KNOWING THAT IT IS GREATER THAN 1. THE LOOP WIILL CONTINE TO CHECK EACH NUMBER 
        //UNTIL IT IS LESS THAN THE NUMBER WE ARE TARGETING. 
        for (let j = 2; j < numToCheck[i]; j++){

            // IF THE REMAINDER EQUALS 0 AT ANY OF THE NUMBERS LESS THAN ITSELF WE KNOW IT IS NOT PRIME AND isPrime WILL SWITCH TO FALSE 
            if(numToCheck[i] % j ==0){
                isPrime = false;
                break;
            } //END IF %==0

        }//END INNER FOR LOOP 

        //IF AFTER EVALUCATION isPrime IS TRUE IT WILL LOG PRIME NUMBER -- IF FALSE IT WILL LOG NOT PRIME 
        if(isPrime === true){
            console.log(`${numToCheck[i]} is a prime number`);
        } else {
            console.log(`${numToCheck[i]} is not a prime number`);
        }//END IF/ELSE isPrime === TRUE

    }//END ELSE IF GREATER THAN 1

} //END OUTER FOR LOOP

//Caleb's Prime Number Checker 

/*
!Prime Number Checker 
?Create a program that checks if the elemnts in an array of numbers are prime and displays a message accordinglly.
TODO Define an array containing a list of numbers.
Output Results: Use console.log to display the results. 
*/

let numbersArray = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

for (let i = 0; i < numbersArray.length; i++)
{
    let divisibleByOne = false;
    let divisbleByItself = false; 
    let divisbleByOther = false; 

    //repeats until j equals value currenlty at numbersArray[i]
    for (let j = 1; j<= numbersArray[i]; j++)
    {
        //only runs when remainder of teh current numbersArray[i] value divided by j is equal to 0
        if(numbersArray[i] % j == 0)
        {
            //sets boolean variables to true if nuimbersArray[i] is divisible by 1, itself, or any other number 
            switch (true)
            {
                case(j==1):
                    divisibleByOne = true ;
                    break;
                case (j == numbersArray[i]):
                    divisbleByItself = true;
                    break;
                default:
                    divisbleByOther = true;
                    break;
            }
        }
    }

    //compares the boolean variables values and determines if the current value at numersArray[i] is a prime number or not 
    switch(true)
    {
        case(divisibleByOne == true && divisbleByItself == true && divisbleByOther == false):
            console.log(`${numbersArray[i]} is a prime number.`);
            break;
        case (divisbleByOther == true || numbersArray[i] == 0 || numbersArray[i] == 1):
            console.log(`${numbersArray[i]} is NOT a prime number.`);
            break;
        default:
            console.log("Something went wrong with calculations.")
    }
}

console.log("~~~~~~~~~~~~~~~~~~~~~~");
console.log("Problem Five Console Output: ");
console.log("~~~~~~~~~~~~~~~~~~~~~~")

//Nicole's Uppercase Checker
// #region Upper Case Checker

let words_arr = ["PLATANO" , "Nicole" , "adioS", "Code" , "JS", "idk"];

for (let i = 0; i < words_arr.length; i++){
    let word = words_arr[i];

    if(word=== word.toUpperCase()){
        console.log(`'${word}' is in uppercase.`);
    } else { 
        console.log(`'${word}' is not in uppecasae.`);
    }
}
//#endregion

/* Classmate Demonstrations END */ 

/*
My Explaining/Understanding of a Nested for loop 

a regular for loop looks like this...

for ( let understanding =0 ; understanding < 1; understanding++)
{
    console.log(line)
}
//The above is an example of an INFINITE LOOP. It reads. "for a case of (understanding being equal to 0; and a condition where if understaning is less than 1; run understanding once, then again."
    //line is 'Welcome to the world of loops! Don't understand? Read line again.' * this will be what it logs on the console 

//Next is an (is the word ESCAPED?) for loop

for (let understanding = 0; understanding < 1 ; understanding++) 
{
    console.log(Line[understanding])
}
//The above line should read. "For the case of (let understanding be equal to 0; understaning less than 1; run understnaing once, then again." 
    //console.log( Line[check understanding once, then again, then stop (as it will be equal to 1)] )
        //NoteWriter Note. The above does work but its logging into the console as just W   (needs double check)

//next is a NESTED for loop 
    // A NESTED for loop is just a for loop inside of a for loop. 
        //hang on. This is about to get confusing. 

//NESTED FOR LOOP*
* my first understaing/ interpertaion 

Picture a circle inside of a cirle. 
    Cirle One says : Spin Once. Then Again. 
    Cirle Two says : Spin Once. Then Again <3.
Inside Cirle One is Cirle Two. 

So in that case lets look at this. 

for (let spin1 = 0 ; spin1 < 1 ; spin1++)
{
    console.log("Spin 1") 

        for (let spin2 = 0; spin2 < 1; spin2++)
        {
            console.log("Spin 2")
        }
}

So the above will read 

//and for the computer it will look like this... 

-- Start (again) --> for (let spin1 = 0 ; spin1 < 1 ; spin1++)--> Start  |
{                                                                        |
    console.log("Spin 1")  <---What the console sees <-------------------|
                                                        
        for (let spin2 = 0; spin2 < 1; spin2++)                          |
        {                                                                |
            console.log("Spin 2")                                        |
        }                                                                |

}  <--- End <------------------------------------------------------------|                           

//first one goes like above
//second one goes like below 

for (let spin1 = 0 ; spin1 < 1 ; spin1++)
{         
    console.log("Spin 1") 

--Start Again --> for (let spin2 = 0; spin2 < 1; spin2++)--> Start|
        {                                                         |
            console.log("Spin 2") <---What the console sees <-----|
        } <--- End <----------------------------------------------|

}

//to get to spin1 you gotta go through spin 2. It takes longer to get to spin 1 than 2 so to get back to spin 1 one must have to spin twice. 

So put them together. 
-- Start (Again) --> for (let spin1 = 0 ; spin1 < 1 ; spin1++)----> Start|
{                                                                        |
    console.log("Spin 1")  <---What the console sees <-------------------|
                                                        
--Start (Again)-->for (let spin2 = 0; spin2 < 1; spin2++)---------> Start| 
        {                                                                |
            console.log("Spin 2")<---What the console sees <-------------| 
        } <--- End <-----------------------------------------------------|

                                                                    
}  <--- End <------------------------------------------------------------|                           
*/ 

// ACTIVE INSTRUCTION START DAY 7 (8/7/2024)
//NESTED LOOPS
//Global and BLOCKED scope 

/* mistake when transcribing. Needs edits. 
//Global = This variable is accessible from any point in this file.l 
let global = "Hello!"
//OUTER LOOP RUNS 10 TIMES
for (let i =1 ; i<= 10; i++){
    let myName = "Michael Valencia"
    console.log(myName)
    //INNER LOOP IS GONNA RUN 50 times
    //for (let j= 1; j <=5 ; j++){
    //    console.log(`${i} * ${j} = ${i *j} `)
    // }
    myName = "Margarito Valencia"; 

}
console.log(myName);

let firstWord = "Hello";

{
    //THIS IS A BLOCKED SCOPE VARIABLE 
    let secondWord = "World!";
    console.log(firstWord + secondWord);
}

console.log(firstWord + secondWord)
*/
/*
My understanding of global vs local / blocked scope...


*/
// DAY 7 (8/7/2024) ACTIVE INSTRUCITON/ QUIZ REIVEW END
// DAY 8 (8/8/2024) ASSIGNMENT/ PROJECT START

/*
Coin Sorter and Wrapper Calculator
Project: Coin Sorter and Wrapper Calculator
Objective:
Create a JavaScript program that calculates the total value of coins in US currency (pennies, nickels, dimes, and quarters) and sorts them into coin wrappers. The program will then output the number of coin wrappers needed and the total amount in dollars.

Instructions:
1 . Define Variables for Coins:
    Create variables to store the number of each type of coin: pennies, nickels, dimes, and quarters.

2. Calculate Total Value of Coins:
    Write code to calculate the total value of each type of coin in dollars.
    Calculate the combined total value of all coins.
3. Sort Coins into Wrappers:
    Use the standard capacity for each type of coin wrapper:
        Pennies: 50 coins per wrapper
        Nickels: 40 coins per wrapper
        Dimes: 50 coins per wrapper
        Quarters: 40 coins per wrapper
    Calculate the number of wrappers needed for each type of coin.
    Calculate the remaining coins that do not fill a wrapper completely.
4. Output Results:
    Use console.log to display the number of wrappers needed for each type of coin and remaining coins that do not fill a wrapper
    Use console.log to display the total amount in dollars.

After finished go to discussion tab and submit link to the Javascript Coin Project.

*/
// DAY 8 (8/8/2024) PROJECT/ASSIGNMENT END 

// DAY 9 (8/9/2024) PROJECT/ ASSIGNMENT cont. START
    //Challenge Data to test project. 
var challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime']

//DAY 9 (8/9/2024) ACTIVE INSTRUCIION/ PROJECT REVIEW START

console.log(challengeData.length)
    //!
    //? Give me the total amount of each coin;
    // ex. dime = 234;
    //? Convert the total amount of coins into dollars (USD currency)
    // ex. dimeCurrencyTotal = $20.20
    //? Total amount Currency all together (PenniesCurrencyTotal + QuartersCurrencyTotal... .etc)

    //Creating this variable to be able to store information; 
    let totalPennyCount = 0;
    let totalDimeCount = 0;
    let totalNickelCount = 0; 
    let totalQuarterCount = 0;

    let pennyValue = .01;
    let dimeValue = .10;
    let nickelValue = .05;
    let quarterValue = .25;

    for (let i =0; i < challengeData.length; i++){
        //console.log(i)
        //how am i going to pick out all the pennies?
        //Based on condion = if statments 
        //console.log(challengeData[i])
        if (challengeData[i] === 'penny') {
            totalPennyCount++

        } else if (challengeData[i] === 'dime'){
            totalDimeCount += 1;
        } else if (challengeData[i] === 'nickel'){
            totalNickelCount += 1;
        } else if (challengeData[i] === 'quarter') {
            totalQuarterCount += 1;
        }
}
console.log(totalPennyCount)
console.log(totalDimeCount)
console.log(totalNickelCount)
console.log(totalQuarterCount)

let pennyConversion = totalPennyCount * pennyValue;
let dimeConversion = totalDimeCount * dimeValue
let nickelConversion = totalNickelCount * nickelValue;
let quarterConversion = totalQuarterCount * quarterValue;

console.log('$' + pennyConversion)
console.log('$' + dimeConversion.toFixed(2));
console.log('$' + nickelConversion.toFixed(2));
console.log('$' + quarterConversion.toFixed(2));
console.log(pennyConversion + dimeConversion + nickelConversion + quarterConversion )

//DAY 9 (8/9/2024) ACTIVE INSTRUCITON/ PROJECT REVIEW END 

/*
Moviung onto Functions! 
A fucntion is a section of code to be set up now but used later, or when called. 

functions do not run with your other code, they just have code set up that sits dorment, or in wait, until its called. 

Functions are written like this...

function funcName(args){
    Do stuff
};

Functions are decared, given names, the paraments are called arugments or args, then inside the code is what it will do. 

MY UNDERSTANDING (as i am further developing it. )


*/

//DAY 9 (8/9/2024) ACTIVE INSTRUCTION/ FUNCTIONS START

//functions can be called before initization
//funcOne();

// function schema 
//making functions saves blocks of code to be ran when we need it.
//INSTEAD of immedietly running as the page loads 
function funcOne(){
    console.log("Hello World")
    console.log(5 +7) ;
};
//This is how we call funciton code blocks to run 
//ex. funcName();
funcOne();

let numOne = 7
let numTwo = 3

//Scope: wheater it's GLOBAL, BLOCK, FUNCTION SCOPE(Local scope)
function addTwoNums() {
    console.log(numOne + numTwo);
}

addTwoNums();

//This function is currently accepting two arguments (args)
function addTwoNumsV2(a, b) {
    console.log( a - b);
}

//We are sending data inside the arguments spots in functions;
addTwoNumsV2(numOne, numTwo);
addTwoNumsV2(6 , 10);
addTwoNumsV2("Hello" , "Zach!");


function fgreeting(){
    console.log("HI");
}
fgreeting();

function greetingByName(name) {
    console.log("Hello" + name + "! Welcome to the site.");
}
greetingByName("Dayna");

function greetingByExcitment(name) {
    let upperCaseName = name.toUpperCase();
    console.log(upperCaseName)

    //THIS IS sending back the output of this function
    return upperCaseName
}

//IF you ever need a function to send back new data, You'll need a return
let screamingName = greetingByExcitment("zach");

// upperCaseName
//console.log(upperCaseName); //! ERRORED OUT bc Local scoped to "greetingByExcitment() function"
console.log(`HELLOOOOOOO ${screamingName} IT'S NORTEHRN LIGHT SUPEX SINGER!!`);

//THIS functions shows DEFAULT values being added in the Arguments
function sandwichMaker(typeOfBread, typeOfMeat = "N/A", typeOfSauce, typeOfVeggie = "N/A") 
{
    console.log(
        `Bread: ${typeOfBread} Meat : ${typeOfMeat} Sauce: ${typeOfSauce} Veggies : ${typeOfVeggie}`
    )
}

let zachsandwich = sandwichMaker("white" , "ham" , "mayo" , "lettuce");
let margaritoSandwich = sandwichMaker("white" , "rostierry chicken" , "buffalo" )

// DAY 9 (8/9/2024) ACTIVE INSTRUCTION END

/*
okay so a funciton is broken down into several main componets 

the function, the paramenters, and the arugments within the pramaters. then what is within the curly braces

okay so , it rea


*/
// DAY 10 (8/12/2024) ACTIVE INSTRUCTION BEGIN. QUIZ PROBLEMS REVIEW
//! Grade Calculator 
//? Create a program that calculates the average greade from an array of grades and determines the corresponding letter grade. 

//TODO Define an Array: define an array ccontianing a list of 5 grades. 
let fgrades = [85,34,56,87,90]; 
let fgradesTwo = [82,56,31,78,67];

//TODO Create a Function: Create a funtion to calculate the average of the grades. 
//? calcutlates the average grade from an array of grades 
function calcAaverage(fgradesArr){
    let faverage = 0;
    for (let i = 0; i < fgradesArr.length; i++){
        faverage += fgradesArr[i]

        average = faverage / fgradesArr.lengh;
        return faverage

    }
    console.log(faverage)

}

calcAaverage(calcAaverage);


//TODO Create Another Function: Create another functiohn oto determine the letter grade based on the average. 

function fletterGrade(fgradeNum) { 
    if (fgradeNum > 100){
        console.log(`${fgradeNum} can't exist and recieve no letter!`)
    } else if (fgradeNum >= 90){
        console.log(`${fgradeNum} has an A average!`)
    }else if (fgradeNum >= 80){
        console.log(`${fgradeNum} has an B average!`)
    }else if (fgradeNum >=70){
        console.log(`${fgradeNum} has an C average!`)
    }else if (fgradeNum >= 60){
        console.log(`${fgradeNum} has an D average!`)
    }else{
        console.log(`${fgradeNum} has an F average!`)
    }
}
fletterGrade(calcAaverage)
fletterGrade(87);

//! Simple To-Do List 
//? Create a program that allows the user to add and display tasks in a to-do list 

//TODO Define an Array: Define an array to store the tasks. 
let taskToDo = [];
//TODO Create Functions: Create functions to add a task and display the to-do list. 

function addATask(additionalTask){
    //how do i add an item to the array?
    taskToDo.push(additionalTask);
    console.log(taskToDo);
}

function displayToDoList(){
    console.log(taskToDo);
}

function removeAnItem(taskCompleted){
    //I need to remve a specifc item. 
    //If else statements?
    //if(taskCompleted =="Make bed"){
    //    console.log("its here!")
    // }
    //debugger
    let uppercaseTaskCompleted = taskCompleted.toUpperCase();
    console.log(uppercaseTaskCompleted)

    for(let i =0; i <taskToDo.length; i++){
        let currentTAskItem = taskToDo[i].toUpperCase();
        if(uppercaseTaskCompleted == currentTAskItem){
            taskToDo.splice(i, 1);
            console.log(taskToDo);    
        }    
    }
}

addATask("Make bed")
addATask("Code some")
addATask("Make food!")
removeAnItem("make food!")
// DAY 10 (8/12/2024) ACTIVE INSTRUCTION END
// DAY 11 (8/13/2024) ACTIVE INSTRUCTION START (REIVEW)
/*
//! Simple To-Do List 
//? Create a program that allows the user to add and display tasks in a to-do list 

//TODO Define an Array: Define an array to store the tasks. 
let taskToDo = [];
//TODO Create Functions: Create functions to add a task and display the to-do list. 

function addATask(additionalTask){
    //how do i add an item to the array?
    taskToDo.push(additionalTask);
    console.log(taskToDo);
}

function displayToDoList(){
    console.log(taskToDo);
}

function removeAnItem(taskCompleted){
    //I need to remve a specifc item. 
    //If else statements?
    //if(taskCompleted =="Make bed"){
    //    console.log("its here!")
    // }
    //debugger
    let uppercaseTaskCompleted = taskCompleted.toUpperCase();
    console.log(uppercaseTaskCompleted)
    //taskToDo = ARRAY OF DATA []
    for(let i =0; i <taskToDo.length; i++){
        let currentTAskItem = taskToDo[i].toUpperCase();
        if(uppercaseTaskCompleted == currentTAskItem){
            taskToDo.splice(i, 1);
            console.log(taskToDo);    
        }    
    }
}

addATask("Make bed")
addATask("Code some")
addATask("Make food!")
removeAnItem("make food!")

Q/A AND NOTES 
    //How do we know its a function?
        //first, a function will be created. Second we will call it in a seperate location

    //GLOBAL, LOCAL/FUNCTION 
        let globalScope = "this is global scoped"
        console.log(globalScope)
        function localScope() 
        {
            let localScope = "this is function scope"
            console.log(localScope)
        }
*/
// DAY 11 (8/13/2024) cont. PROBLEMS REIVEW START

//! Temperature Converter 
//? Create a program that converts tempatures between Celsius, Fahrenheit, and Kelvin. 

//TODO Define Variables: Allow the user to input a tempature value and the unit they want to convert from. 
let ftempNum = 25;
let tempUnitLetter = "C";

//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin. 

//?Making this function purley for changing Celsius number to Kelvin Number!
function celsiusToKelvin(value){

    //I KNOW I'M to have to store this kelvin number somewhere.
    //*Planning to return to a store variable.
    return value + 273.15;
}

function celsiusToFahrenheit(value){
    return (value * 9/5) + 32
}

function KelvinToCelsius(value){
    return (value * 9/5) + 32
}

function fahrenheitToCelsius(value){
    return (value - 32) * 5/9
}
//let storedKelvinNum = celsiustoKelvin(ftempNum) //! WORKS
//console.log(storedKelvinNum) //! 298.15
//let storedFahrenheitNum = celsiustoFahrenheit(ftempNum); //!!WORKS
//console.log(storedFahrenheitNum); //! 77 degrees

//? I have the conversions when dealing with celsius numbers 
//TODO I NEED a way to tell apart and give me the other degrees

function tempConverter(currentTempValue, currentTempLetter){
    console.log(currentTempValue + " is the tempNum");
    console.log(currentTempLetter + " is the tempUnitLetter");
    let upperCaseLetter = currentTempLetter.toUpperCase();
    console.log(upperCaseLetter)
    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;

    if(upperCaseLetter === "C"){
        fahrenheit = celsiusToFahrenheit(currentTempValue);
        kelvin = celsiusToKelvin(currentTempValue)
        celsius = currentTempValue
        console.log(`Fahrenheit: ${fahrenheit} Kelvin:${kelvin} Celsius: ${celsius}`);
    } else if (upperCaseLetter === "F"){
        fahrenheit = currentTempValue;
        celsius = fahrenheitToCelsius(currentTempValue)
        kelvin = celsiusToKelvin(celsius);
        console.log(`Fahrenheit: ${fahrenheit} Kelvin:${kelvin} Celsius: ${celsius}`);
    } else if (upperCaseLetter === "K"){
        celsius = KelvinToCelsius(currentTempValue)
        fahrenheit = celsiusToFahrenheit;
        kelvin = currentTempValue;
        console.log(`Fahrenheit: ${fahrenheit} Kelvin:${kelvin} Celsius: ${celsius}`);
    }
}

tempConverter(ftempNum, tempUnitLetter)

//? (Hint: There will be two arguments temerature value and unit letter (Celsiius, Farenhit, Kelvin))
//? ex. if i provide 25 and "C" I want the Kelvin and Farenheit tempature 

//* KelvintoCelsius conversion:
//* kelvinNum - 273.15

//* celsiustoKelvin:
//* celsiusNum + 273.15

//* fahrenheitToCelsius:
//*(fahrenheit - 32) * 5/9

//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32

//TODO Use if-else Statements: use if-else statments to determine which conversion to preform based on teh user's' input. 
//* Output Results: Use console.log to display the convered temperature. 

//Bianca's Song List 

let songTitles = [];
//Empty array to add songs to 

//creating a function to add songs to array using .push method
function addASong(additionalSongs){
    songTitles.push(additionalSongs);
    console.log(songTitles);
} //line 222

//console.log (line 222) additional songs array should now look roughly like : abstract, always on my mind, black magic woman, babylon
addASong(`Abstract (Psychopomp)`);
addASong(` Always On My Mind`);
addASong(` Black Magic Woman`);
addASong(` Babylon (Don't Let Me Fall)`)

//creating a funciton to remove a song from the array or "playlist"
function removeASong(deleteSong){
    songTitles.splice(2,1);
    console.log(songTitles)
} //line 234

removeASong();
//calling function so console.log (line 234) can show up on the console 

//displaying plalylist on console
console.log(`Playlist Displayed As: 
    ${songTitles}`);
//End of problem five / Bianca's song list

//Nicole's Bank Account Manager
//#region
//VARIABLES 
let balance = 1000;
depositMoney(790.98); //Deposit money into acct
withdrawMoney(123.8); //Withdraw money from acct
checkBalance(); //Balance in acct

//DEPOSIT MONEY INTO THE ACCT 
function depositMoney(amount){
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited $${amount}. New balance $${balance}`);
    } else {
        console.log(`Deposit amount must be greater.`);
    }//END OF IF-ELSE STATEMENT 
}//END OF depositMoney FUNCTION 

//WITHDRAW MONEY FROM ACCT
function withdrawMoney(amount) {
    if (amount > 0) {
        if (amount <= balance){
            balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${balance}`);
        } else {
            console.log("Insufficent funds.");
        } 
    } else {
        console.log("Withdrawl amount must be greater than zero.");
    }
} //END OF withdrawMoney FUNCTION 

//CHECK BALANCE OF ACCT
function checkBalance(){
    console.log(`Current Balance: $${balance}`);
}

//#endregion //End of Nichole's Bank Account Manger 

// Christopher's Bank Account Manager START
//! Bank Account Manger
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance. 

//TODO Define Variables: Start with a balance variable. 

let bankBalance = 1733;

//TODO Cretae Functions: Create funcitons to deposit money, withdraw monely, and check the balnce. 
function bankDeposit(depositAmount){
    if(depositAmount > 0){
        bankBalance += depositAmount
        return depositAmount;
    }
}
let totalDeposit = bankDeposit(1017);
console.log(`You made a deposit of $${totalDeposit}`);

//TODO Use if-else Statments: Use if-else statments to ensure the withdrawl amount does not exceed the balanace.
//*Output Results: Use coonsole.log to display the updated balance after each operation. 

function bankWithdraw(moneyWithdraw){
    if (moneyWithdraw > 0 && moneyWithdraw <= bankBalance){
        bankBalance -= moneyWithdraw;
        console.log(`Your wihtdraw was successful! You're new balance is $${bankBalance}`);
    } else if (moneyWithdraw > bankBalance){
        console.log(`You have insufficent funds in your account.`)
    } else {
        console.log("You have invalid wihtdraw amount...")
    }
}
let totalWithdrawl = bankWithdraw(1562)

function bankChecker(checkBalance){
    console.log(`You have a balance of $${bankBalance}`)
    return checkBalance;
}
let balanceChecker = bankChecker(bankBalance);

//Christopher's Bank Account Manger END 
// DAY 11 (8/13/2024) ACTIVE INSTRUCTION & QUIZ PROBLEM REIVEWS END 
//DAY 12 (8/14/2024) ACTIVE INSTRUCTION START
/*
    Introduction to Objects. 
    Objects are like more detalied arrays. They hold multiple data sets.
    Written like this...
    
    var obj = {
        property: value,
        key: value,
        propety:value
    }

    objects allow you to access data within an array that holds miltiple peices of information. 
    exp.
    
    var person = {
    fName: 'Dwayne',
    lName:'Johnson',
    alias:'The Rock',
    "occupation": 'President of the United States',
    "other jobs": ['wrestler', 'actor'],
    age: 51,
    isStrong: true
    }

    but what if one needs to call a property? 
    to access a propety one should call a property name or variable
    exp. Access "The Rock"

    synax : 
        obj.key

    so for the example it would look like 
        1. Dot Notation 
            person.alias => 'The Rock'
        2. Bracket Notation 
            obj["The Rock"]

    you can also use bracket notation to call several things as well. 
        person["other jobs"] => ['wrestler', 'actor']
        or
        person['other jobs'][1]=> 'actor'
*/

//! Objects

//Comparable to arrays just more detailed - short summary - michael 

//syntax for objects 
let favoriteCharacter = {
    fName: "Bob",
    lName: "Ross",
    hobbies:["painting", "Animal Caring"],
    occupation:["Drill Sargent", "TV Peronality"],
    age: 52,
    CurrentHealth: "Dead",
    catchphrase: quoter(),
    catchPhrase: function(catchPhrase){
        console.log(catchPhrase)
    }
};
//This calls the entire object data
console.log(favoriteCharacter)
//Callinig one of the property values;
console.log(`My favorite charcter's first name is ${favoriteCharacter.fName}`)
//Calling a propety that has a ARRAY data type
console.log(`One of my favorite character's hobbies is ${favoriteCharacter.hobbies[1]}`)

//This will update a propety value 
favoriteCharacter.currentHealth = "Alive and well in spirit!";

console.log(favoriteCharacter.currentHealth);

//This will add a new propety to the object  
favoriteCharacter.PaintingSkills = "HE WAS SO GOOODOOOD";

console.log(favoriteCharacter)

/*
 Objects can also be connected to functions. 
    exp. 
    person.quote = function () {
    var message = 'Can you SMELL what The Rock...is cooking??';
    console.log(message);
    return message;
    }

    however it would be only stored to the propety value. but it would probaby be better to set up your functions differently. 
*/


//Objects can store funcitons

function quoter(){
    let quote = "There are no mistakes only happy accidents."
    return quote
}

favoriteCharacter.catchPhrase("There are no mistakes only happy accidents.")

//! Arrays of Objects

let listOfMusic = [
    {
        title: 'Never gonna give you up',
        artist: 'Rick Astley',
        year: 1987,
    },
    {
        title:'Black Magic Woman',
        artist: 'Santana',
        year: 1960
    }
]

//Format nameOfVar[#] = the whole object in that index 
console.log(`${listOfMusic[0]} will grab the whole object in that index number`);

//Gives you teh lenth of propeties in a object 
let currentObjectLength = Object.keys(listOfMusic[0].length).length;
console.log(`${currentObjectLenth} is the number of propeties`);

//This will return object object. Specify whatcha need from this object!
console.log(`${listOfMusic[1]} will return object object in a template literal`);

//DAY 12 (8/14/2024) ACTIVE INSTRUCTION END

//QUIZ PROBLEMS DAY 12 (8/14/2024) START

//(1)
//! Personal Contact Book
//? Create a simple contact book where you can add, view, and search for contacts by name.
 
//TODO Define a Contact Object: Each contact should be represented as an object with properties like name, phone number, and email.
//TODO Store Contacts in an Array: Use an array to store multiple contact objects.
//TODO Create Functions: Craeate functions to add a contact, view all contacts, and search for a contact by name.
//* Output Results: Use console.log to display the contacts and search results.
 
//(2)
//! Student Grade Management
//? Create a program to manage student grades, where you can calculate the average grade for the class and identify students who need to improve.
 
//TODO Predefine Student Objects: Each student should be an object with properties like name and grade, stored inside an array.
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 76 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 63 },
    { name: "Eve", grade: 78 }
  ];
 
//TODO Calculate Average Grade: Write a function to calculate the average grade of the class.
//TODO Identify Students Below Average: Write a function to find and list students with grades below the class average.
 
 
//(3)
//! Movie Collection Tracker
//? Create a program that allows you to manage a collection of movies, including adding movies, rating them, and viewing your collection.
 
//TODO Define a Movie Object: Each movie should be represented as an object with properties like title, genre, and rating.
//TODO Store Movies in an Array: Use an array to store multiple movie objects.
//TODO Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.
//* Output Results: Use console.log to display the movie collection and ratings.
 
//(4)
//! Library Book Tracker
//? Create a program to manage a small library, where you can check which books are available or borrowed, and filter the books by their status.
 
//TODO Predefine Book Objects: Each book should be an object with properties like title and status (available or borrowed), stored inside an array.
let books = [
    { title: "The Great Gatsby", status: "available" },
    { title: "1984", status: "borrowed" },
    { title: "To Kill a Mockingbird", status: "available" },
    { title: "The Catcher in the Rye", status: "borrowed" },
    { title: "Moby-Dick", status: "available" }
  ];
//TODO Filter Available Books: Write a function to list all available books.
//TODO Filter Borrowed Books: Write a function to list all borrowed books.

//QUIZ PROBLEMS DAY 12 (8/14/2024) END (PLEASE DO)

//DAY 13 (8/15/2024) Zach's Active Instruction  START

// classes
//Define a class named `Car` that represents a vehicle. 

class Car {
        //The constructor method is called when a new instance of the class is created. 
        //It initializes the propoerties `make`, `modle`, and `speed` for teh Car object. 
      constructor(){ 
        this.make = "";
        this.model = "";
        this.speed = 0;
    }

        //Define a method named `accelerate` that increases teh car's speed.
        //The `mph` parameter specfies how much to increase the speed by.
       accelarate(mph){ 
        this.speed += mph; //Add the specifed mph to teh current speed
        console.log(`This car is going ${this.speed}`);  //Log the updated speed       
    }
//Define a meethod named `break` that decreases the car's speed. 
//The `mph` parameter specifes how much to decrease the speed by. 
    brake(mph){
        this.speed -= mph;
        console.log(`This car is going ${this.speed} mph`);
    }
}

// Create an instance of the `Car` class with the make "Nissan" and model "Pathfiinder".
const shitbox = new Car("Nissan" , "Pathfinder");


console.log(`This car is going ${shitbox.speed} mph`); //Log the intial speed (which is 0)
shitbox.accelarate(20); //Call the `accelerate` method to increase speed by 20 mph
shitbox.brake(50); //Call the  `brake` method to decrease speed by 50 mph

// Define a class named `Employee` that represents and employee. 

class Employee {
    //The construtor method initializes the propeties ` name`, `title`, and `catchPhrase`.
    constructor(name, title, catchPhrase){
        this.name = name; // the name of the employee
        this.title = title; // The job title of the employee
        this.catchPhrase = catchPhrase; //A catchphrase associated with the employee
    }
}

    // Create instances of the `Emplolyee` class for two characters. 
    const sponebob = new Employee ("Spongebob" , "Frycook", "I'm ready");
    const squidward = new Employee("Squidward", "Cashier", "I hate everyone");

    sponebob.introduce(); //Call the `introduce` method to introduce Spongebob
    squidward.introduce(); //Call the `introduce` method to introduce Quidward

    //Define a class named `Animal` that represents a generic animal. 
    class Animal {
        //Define a method named `speak` that logs a generic animal.
        speak(){
            console.log("Some animal noise");
        }

        //Define a method named `nap` that logs a sleeping sound. 
        nap(){
            console.log("zzz");
        }
    }

    //Define a class named `Dog` that extends (inherits from) the `Animal` class.
    class Dog extends Animal {
        // Override the `speak` method to log a barking sound instead of the genic animal noise.
        speak(){
            console.log("Barking");
        }
    }

    //Define a class anmed `Cat` that extends (inhearts from) the `Animal` class. 
    class Cat extends Animal {
        //Override the `speak` method to log a mewowing sound instead of the generic animal noise. 
        speak() {
            console.log("Meow")
        }
    }

    //Function declaration for `speak`.
    function speak(){
        console.log("speaks 1"); //This funtion will be overridden by the next one
    }

    function speak() {
        console.log("speak override"); ///This function overrides the previous one
    }

    // When calling `speak()`, it will use the last defined funtion.
    speak(); //Logs "speak override"

//DAY 13 (8/15/2024) Zach's Active Instruction END
//DAY 13 (8/15/2024) Quiz Problems Review START

//Nicole's Student Grade Management

//#region Personal Contact Book

//#region Student Grade Management 

//OBJECT -- arr
let nStudents = [
    {name: "Alice", grade:85},
    {name: "Bob", grade: 76},
    {name: "Charlie", grade:92},
    {name: "David", grade:63},
    {name: "Eve", grade: 78},
];

//FUNCTION -- CALCULATE GRADE AVG
function nGradeAverage(){
    let total = 0; //sets total value to 0
    //loops through studetns arr lenght
    for (let i = 0; i < nStudents.length; i++){
        total += students[i].grade; //adds all grades as it loops and stores in 'total'
    }//END FOR LOOP 
    let average = total / students.length; //stores total / lenght of arr in average
    return average; //returns resutls to nGradeAverage
}//END nGradeAverage FUNCTION 

//FUNCTION -- IDENTIFY STUDENTS BELOW AVG
function belowAverageStudents(){
    let average = nGradeAverage();
    let belowAvg = []; //int arr that wiill sstore below avg studetns
    //loops through student arr
    for (let i = 0; i < students.length; i++){
        //if student grade is < average
        if (students[i].grade < average){
            belowAvg.push(nStudents[i]); //adds strudent to belowAvg arr
        } //END IF STATEMENT
    }//END FOR LOOP 
    return belowAvg;
}//END belowAverageStudents FUNCTION 

//OUTPUT -- DISPLAY TO CONSOLE GRADE AVRAGE AND LIST OF STUDENTS BELOW AVERAGE 
let avg = nGradeAverage(); //stores gradeAvg restults into avg



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// MY QUESTIONS 

//what are the () with fucntions for. function functionName (this part. expain this.)









/*'
// MY ANSWERS
//So, if the ! means not and puting in front of a true makes it false, why is that sometimes a better case than just writing false? (its just faster. More instant, you can see what you mean or what you're tryinig to compare vs writing in false.)
// whats the difference between `` and "" and '' ? (template literals are more for writing out what you want it to say while quotes are like what its saying.)
//how do i know what words are mine/unique to use and what words are already preset in JavaScript? (pratice. using the langauge.)
//What are "template literals" ----> ${this is template literals} //will get further explication later. but it basially just works similar to quotes but inside of quotes so you can call to something/a variable prevously named/declared (see 2, there like a different kinda quotation mark)
//Expain scope again (scope. Where in the computer page will your code be seen. GLOBAL is everwhere, at any point on your page you can reference it. No matter how far down you go, its everywhere. LOCAL (or funcgtion scope) is held in one single area. It can not be refrenced futher down on the page, only the code that references it can reference it. )


*/