// Arrays:
let fruits = ["Mango", "Apple", "Banana"];
// To access the element inside of the array; 
console.log(fruits[2]);// "Banana";
console.log(fruits[1]);// "Apple";
console.log(fruits[0]); // "Mango";

// Nested Array : 

let NewArray = ["one", ["two", 'Three'] , 1];

// Accessing the nested array:
console.log(NewArray[1][0]);
console.log(NewArray[1][1]);

let word = "JustinBieber".split("");
for (let i = 0; i < word.length; i++){
    console.log(word[i]);
}


// Practice: 
// 1. Create a array name favsinger & store 3 fav  singer; 
let favSinger = ["Justin", "ED", "Bruno"];
// 2. log the first singer in the array;
console.log(favSinger[0]);
// 3. create an array of favNumber & store 4 fav number; 
// let favNumber = [25,12,10,9];
// 4. create an array name (mixedArr) store ["String",["otherArray"],123,true]; 

let  mixedArr = ["Mile",["justin-bieber", "Ronny"],123, true];
// 5. Now access each item in that array by using [] notations; 

console.log(mixedArr[0]);
console.log(mixedArr[1][0]);
console.log(mixedArr[1][1]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);


// Basic Method of arrays;;
const FRUIT  = [
    "Apple",
    "Pomegranate",
    "Mango",
    "strawberries",
    "pineapples",
    "grapefruit"
];
FRUIT.push("Rambutan");
FRUIT.unshift("Jackfruit");
console.log(FRUIT);
FRUIT.pop("");
FRUIT.shift();

const FRUITS = [
    "Apple",
    "Banana",
    "Orange"
]
const MOREFRUIT = [
    "Mango ",
    "Jackfruit",
    "Grapefruit"
]
const FRUITSS = FRUITS.concat(MOREFRUIT);
console.log(FRUITSS);

const NUMBER = [2,1,5,6,7,8,9];
console.log(NUMBER.sort());

// OBJECT: 
let Person = {
    fristName:"Mike",
    LastName:"Toney",
    age:21,
    location: ['Planet',"Earth"],
    isProgrammer:true

}
console.log(Person);

// Accessing the object; 

console.log(Person.fristName);
console.log(Person.LastName);
console.log(Person.age);
console.log(Person.location[1]);
console.log(Person.isProgrammer);

// Bracket notations: 
console.log(Person["fristName"]);
console.log(Person["LastName"]);
console.log(Person["age"]);
console.log(Person["location"]);
console.log(Person["isProgrammer"]);

// Adding New properties; 
Person.FRUIT = "JackeFruit";
console.log(Person);



// practice:
// 1.crete object name car;
// 2. add (type, model;,color) as properties;
// 3. check typeof object;
// 4. update the type property to "toyota"
// 5. add new property Wheel;
// 6. log car to the console 
let car = {
type:"BMW",
model:"Q7",
color:"white" 

}
console.log(typeof car);
car.type = "Toyota";
car.wheel = 4;
console.log(car);


// Functions: 
function greet(){
    
    console.log("Hello from the function");

  return ;
}
for(let i = 0; i <=5; i++){
    console.log(greet());
 
};

function sayhello(name){
    console.log(`hello ${name}`);
}
sayhello("Mike");

// 1. Create a function name(myFunction)
// 2. This function will take two parameters
// 3. Any Number we pass as argument it will multiply that number;
// 5 log the value;

function myFunction(num1, num2){
    return num1 * num2;
}
console.log(myFunction(10, 10));