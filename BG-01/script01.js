// 1.Create a variable(Name) and store your name;
let name = "Nitin";

// 2.  create a variable(goal) and store your goall
 let goal = "Rich-guy";

//  3. create a variable (gender) and store your gender;
let gender = "male";

// 4. create a variable (instagram) and store your id;
let instagram = "@nectorcode";

// Logging all the variable;
console.log(name);
console.log(goal);
console.log(gender);
console.log(instagram);



// Primitive Data type : 1. Number;
let num = 2025.5;// we've stored a number value to a variable;

// Basic Math: we can use manipulate the value like adding or doing other kind of mathematical operations; 

// Addition:
let num1 = 25;
let num2 = 25;
console.log(num1 + num2); // it will add these two values which is stored in two different variable;
console.log(25 + 25); // we can also do this as well;

// Subtraction;
let num3 = 50;
let num4 = 25;
console.log(num3 - num4);
console.log(50-25);

// Multiplication;
let num5 = 12;
let num6 = 12;
console.log(num5 * num6);

// Division;
let num7 = 50;
let num8 = 2;
console.log(num7 / num8);

// Remainder;
let num9 = 64;
let num10 = 2;
console.log(num9 % num10);

// Power;
console.log(2 ** 2);



// Boolean: it's value that can be true or false on or off;
let isTrue = true;
console.log(isTrue);

let isFalse = false;
console.log(isFalse);

let not = NaN;
console.log(not)// not a number;

//Falsy value: 1.NULL, 2.Undefined, 3. 0,-0  , 4. NaN; 5."Empty string or quote";

// Truthy value: other than the falsy value everything is true;


// Practice: 
// 1.Create variable name(isprogramminglanguage) store true as value; 
let isprogramminglanguage = true;
let ishard = false;
let favNumber = 25;
console.log(favNumber + undefined)// it will give you NaN



// Comparison operator; it will compare two values and the output value will be true or false; 

// Relational operators:
// Equality Operators:

// Relational Operator: 
//  > Greater than
//  < less than;
// >= greater than equal to; 
// <= less than equal to; 

let x = 10; 
let y = 20; 

console.log( x > y) // false;
console.log(x < y) // True;
console.log(x >= y) // false;
console.log(x <= y)// True;

// Equality Operator : 
// 1. === Strict equality(type + value);
// 2. !== strict non-equality(type + value);
// 3. == lose equality operator ;(value);
// 4. != not equality operator; (value);

console.log(10 === 10);// true;
console.log( 10 !== 10) // false;
console.log(10 !== "10")// true;
console.log(10 == "10");// true;
console.log(10 != "10")// false









// Practice start here: 

// 1. create a variable name(firstFavNumber) & store your favorite number; 
let firstFavNumber = 10;

// 2. create variable name second fav number store fav number; 
let secondFavNumber = 12; 
// 3.check if (first number is greater than second);
console.log( firstFavNumber > secondFavNumber);

// 4. check if first number is less than second number;
console.log(firstFavNumber < secondFavNumber);

// 5. check if first number is grater than equal to second number ;
console.log(firstFavNumber >= secondFavNumber);

// 6. check  if first number is less than equal to second number;
console.log(firstFavNumber <= secondFavNumber);

// 7. check if first number is equal to second number using the strict equality; 
console.log(firstFavNumber === secondFavNumber);

// 8. check if first number is equal to using lose equality ;
console.log( firstFavNumber == secondFavNumber);
// 9. check if first number is not equal to second number using strict non equality;
console.log(firstFavNumber !== secondFavNumber);

// 10 check if first number is not equal to second number using lose non equality; 
console.log(firstFavNumber != secondFavNumber);


// ==============================================================;
//                        STRINGS;
// ==============================================================;

let firstName = "Killer ";
let secondName= "Bunny";

// String concatenation; 
let fullName = firstName +" " + secondName;
console.log(fullName);// Killer Bunny;

// Using some methods for the concatenation; 
let NewName = firstName.concat( secondName);
console.log(NewName);

// Append; Appending new value to the variable;
firstName += "Shark";
console.log(firstName);

// 3.length of string; 
console.log(firstName.length);

// 4. Cases; 
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// 5. slice;
console.log(firstName.slice(0,2));// Ki

// 6. split & join; split will split string and join will join the string; 
console.log(firstName.split(""));

// 7. Includes; check if string some specific word and return output as boolean; 
console.log(firstName.includes("K")); 

// 8. Trim: it will remove extra space from the string; 
console.log(firstName.trim());



// ==================================================================
//                       Template String
// =-================================================================

let desc = `this is random 
text`; // it will include all spaces and everything; 


let Firstname = "John"; 
let Lastname = "cena";

let Fullname = `${Firstname} ${Lastname} something`;
console.log(Fullname);



// PracticesFils; 

// 1. create a variable name(favActorFirstName) & store your actor name; 
let favActorFirstName ="Tom ";
// 2. create a variable name (favActorLastName) & store last name; 
let favActorLastName = "Holland"; 

// 3. create a variable name (FULLNAME) & concatenate {favActor Name}; 

let FULLNAME = favActorFirstName.concat(favActorLastName);
console.log(FULLNAME);
FULLNAME =`${favActorFirstName} ${favActorLastName}`;
console.log(FULLNAME);

FULLNAME = favActorFirstName + " " + favActorLastName;
console.log(FULLNAME);

// 4. create a variable(uppercase) & capitalize fav actor name; 
 let uppercase = FULLNAME.toUpperCase();
 console.log(uppercase);

// 5. create a variable name (message) & store 'my favactor and say something about him; 

let message = `${favActorFirstName} ${favActorLastName} is one of my fav actor who plays as spiderMan one of my fav superhero `;
console.log(message);
// 6. now append this message to the message variable 1 his best show is silicon valley; 
message += `his best movie is home coming`;
// 7. now log everything; 
console.log(message);








// ==================================================================
//                           Type Conversion;
// ==================================================================

// STring to Number; 

let money = "50"; 
// 1. money = parseInt(money); 
money = parseInt(money);

// 2. money = +money;
money = +money;

// Money = Number(money);
money = Number(money);



// Number to string; 
 let Money = 50;

//  1. money.toString()
Money.toString();

// 2.String(Money);
String(money);


// convert string to decimal; 
let MMoney = "502.555"; 

MMoney = parseFloat(MMoney);
console.log(MMoney);
 