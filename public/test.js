let x = "5";
let y = 10; 

let z = x + y;

console.log(z); // Output: "510"




function add(a, b) {
    return a + b;
}


const car = {
    make: "Toyota",
    model: "Camry", 
    year: 2020,
    start: function() {
        console.log("Car started");
    }
};  

let text ='my name is "Turabi Rahman" your lord commande';
console.log(text);

console.log(parseInt("10.33 20 30"));  // Output: 10 


const fruits = ["apple", "banana", "cherry"];

function printFruits(value) 
{    
   console.log(value);
}   

fruits.forEach(printFruits);

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

//cars.sort(function(a, b){return a.year - b.year});
cars.sort();

console.log(cars);


const numbers = [40, 100, 1, 5, 25, 10];

function myFunction(value, index, array) 
{
    console.log(value);
    console.log(index);
    console.log(array);
}

numbers.forEach(myFunction);

console.log(Array.from("ABCDEFG")); // Output: ["A", "B", "C", "D", "E", "F", "G"]


let age = 18;
console.log(age >= 18 ? (age < 30) ? "You are an adult." : "You are a minor." : "you are a minor.");

