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
    Iteration: How many times the code will repeat. 

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
    console.log(Line + " 1")
}
//Read above as followed. //For ( initizlation to equal 0 ; initilztion is less than 1 ; initization should be checked/ran once then again.) 

// OR 
//debugger
for ( let understanding = 0; understanding < 1 ; understanding++) {
    console.log(Line + " 2")
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
 

 
//!Age Group Categorizer (2)
//? Create a program that categorizes the ages in an array as 'child', 'teen', 'adult', or 'senior' based on their values.
//TODO Define an array containing a list of ages.
//Output Results: Use console.log to display the age categories.
 
 
//! Palindrome Checker (3)
//?Create a program that checks if the elements in an array of strings are palindromes and displays a message accordingly.
//TODO Define an array containing a list of strings.
//Output Results: Use console.log to display the results.
 

//!Prime Number Checker (4)
//?Create a program that checks if the elements in an array of numbers are prime and displays a message accordingly.
//TODO Define an array containing a list of numbers.
//Output Results: Use console.log to display the results.
 

//!Uppercase Checker (5)
//?Create a program that checks if the elements in an array of strings are in uppercase and displays a message accordingly.
//TODO Define an array containing a list of strings.
//Output Results: Use console.log to display the results.

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





// MY QUESTIONS 
/*
//So, if the ! means not and puting in front of a true makes it false, why is that sometimes a better case than just writing false?

// whats the difference between `` and "" ?

//how do i know what words are mine/unique to use and what words are already preset in JavaScript?

//What are "template literals"

*/