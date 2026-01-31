"use strict"; //treat all js code as a newer version
// alert(3+3) -> we r using nodejs not browser so there will be no alert pop up

// console.log(3+3); console.log("hitesh") -> code readability shoul be high (do not write code like this)
let name = "Sweta" //string
let age = 20; //number
let isLoggedin=false; //boolean

//Number => range: 2^53
//String => must be writeen in double strings("")
//bigInt => not mostly used but used in trading 
// Boolean => true or false
// null  => standolan value (let state=null) => it is object
//undefined => value is not assigned yet (let state;) =>it is undefined always
//symbol => uniqueness (use mostly iin react.js and used in figma tools)

console.log(typeof age) //used to now the datatype 
console.log(typeof null) //object
console.log(typeof undefined); //undefined 


/* Conversion Operation*/

/* NUMBER TO STRING */
let score="33";
console.log(typeof score)
console.log(typeof(score)) //as a method

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) //->
/*
1.NaN=not a number 
   1.for 33abc 
   2.for undefined
   3.for something which cannot convert into number like sweta
2.null=0
3.true = 1
4.false = 0
*/

/* BOOLEAN CONVERSION */

let isLoggedIn=1
let booleanConversion=Boolean(isLoggedIn)
console.log(booleanConversion)
 /* 
 1. 1=true;
 2. 0=false;
 3. ""=false;
 4. "Sweta"=true;
 */

/* NUMBER TO STRING */

let num = 33
let stringNumber = String(num)
console.log(stringNumber)
console.log(typeof stringNumber)



 

