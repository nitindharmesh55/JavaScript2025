// Conditional statements; 
let a = 10;
let b = 10;

if(a > b){
    console.log("a is greater than b");
}
else if(a < b){
    console.log("a is less than b");
}
else{
    console.log("a is equal to b");
}

let time = 10;
let greetings;

if(time < 10){
    greetings = "good mornings";
    console.log(greetings);
}
else if (time < 20){
    greetings = "good Afternoon";
    console.log(greetings);
}
else{
    greetings = "good Evenings";
    console.log(greetings);
    
}


// Practice Time; 

// 1. create a variable(password) store nothing; 
let password =8;

// 2. if password if equal to 8 print welcome; 
if(password === 8){
    console.log("Welcome");
}
// 3. if password is less than or equal to 8 print "password us too short";
else if(password <= 8){
    console.log("Password is too short");
}
// 4. if password us greater than or equal to 8 print "too Long password"; 
else if(password >= 8){
    console.log("Too Long Password");
}
// 5. if all fails print "Please provide a password"; 
else{
    console.log("Please Provide Password");
}


// SWITCH; 
let X ;
let bulb ;

switch(X){
    case 0 :
        bulb = "Off";
        
        break;
    case 1:
        bulb = "On";
       
        break;
    default:
        bulb = "No Value Found";
      
}
console.log(bulb);


// Practice Time; 

// 1.Create variable name(fruit) & store "Apple";
let fruit = "Apple";
// 2. if case is Apple print "apple is good";
switch (fruit){
    case "Apple":
        console.log("Apple is good");
        break;
    case "Orange":
        console.log("I am not a fan of orange");
        break;
    case "apple":
        console.log("How You like them apples?");
        break;
    default:
        console.log("I Have never heard of that Fruit");
}









// ====================================================================
//                             Loops:
// ====================================================================
// DRY : Don't Repeat Yourself;
// For Loops; 

// for (initialExpression, condition, incrementExpression, decrementExpression ){}

for(let i = 0;  i <= 5; i++){
    console.log("Hello World", i);
}


// Nested loops:
for (let i = 1; i <= 10; i++){
    console.log("---Outer-Loop---", i);

    // Nested Loops;
    for (let j = 1; j <= 5; j++){
        console.log("---inner loop", j);
    }
}

// Practice:
let NAME = "Naruto";
// 1.Print your name & numbers from 0 through 10;
for(let name = 0; name <= 10; name++){
    console.log(`${NAME}`, name);
}

// While Loops: 

// While (condition){
// Code be Printed;
// }
let i = 1;
while(i <= 5){
    console.log("Hey What's UPP buddy", i);
    i++;
}
// Q!:Print "Your name 100 times to the console using while loops 
// Iterate will start from 10";
let j = 10; 
while (j <= 100){
    console.log("Mile");
    j++;
}


// Do while Loops:
let k = 1;
do{
    console.log("Hello world", k);
    k++;
}while(k <= 5);

// Print "your name" 400 times to the console using do while loop
// iteration start from 20;

let n = 20; 
do{
    console.log("Gojo",n);
    n++;
}while(n <= 400);



// Logical operators;
// 1. AND(&&): True if both values are true else evaluates false ;
// 2. OR(||): True if either of the operand booleans is true evaluates to false if both are false; 
// 3. Logic(!) NOT: True if the operand is false and vice-versa; 

const aa = true;
const bb = false;
const cc = 4;
// Logical AND;
console.log(aa && bb);// false;
console.log(aa && cc);// true;

//  Logical or(||);
console.log(aa || bb); // true;
console.log(bb || cc);// true;

// Logic Not(!);
console.log(!bb);// true;
console.log(!aa);// false;
console.log(!cc);


let pass = "Mike-web";
if(pass.length >= 8 || pass.includes("web")){
    console.log("Valid passWord");
}
else{
    console.log("Invalid password !!");
}