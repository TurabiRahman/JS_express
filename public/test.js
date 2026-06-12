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