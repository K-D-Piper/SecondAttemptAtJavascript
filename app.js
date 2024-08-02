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