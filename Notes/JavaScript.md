12. Function -  
     

Javascript is called a functional programming language.  
 

In JavaScript, function parameters and arguments are distinct concepts:

Parameters are the names listed in the function definition.

Arguments are the real values passed to, and received by the function.

From <[https://www.w3schools.com/js/js_function_parameters.asp](https://www.w3schools.com/js/js_function_parameters.asp)>

Function call = function invocation

If we do not return something from a function  
JS automatically returns -- return undefined

1. Object -

If we assign a value directly to a variable , it's called literal

Functions and methods are same in javascript

If we use functions in a object as a property  it's called a method

1. Event -

|   |   |
|---|---|
|onchange|An HTML element has been changed|
|onclick|The user clicks an HTML element|
|onmouseover|The user moves the mouse over an HTML element|
|onmouseout|The user moves the mouse away from an HTML element|
|onkeydown|The user pushes a keyboard key|
|onload|The browser has finished loading the page|

From <[https://www.w3schools.com/js/js_events.asp](https://www.w3schools.com/js/js_events.asp)>

1. Strings -

The backslash escape character (\) turns special characters into string characters:

|   |   |   |
|---|---|---|
|Code|Result|Description|
|\'|'|Single quote|
|\"|"|Double quote|
|\\|\|Backslash|

From <[https://www.w3schools.com/js/js_strings.asp](https://www.w3schools.com/js/js_strings.asp)>

1. String Methods -

Strings are immutable -- strings cannot be changed , only replaced

- If no character is found, [ ] returns undefined, while charAt() returns an empty string.

From <[https://www.w3schools.com/js/js_string_methods.asp](https://www.w3schools.com/js/js_string_methods.asp)>

Undefined is a Value and a Datatype

1. String search -
2. Template literals - `something`

Template strings provide an easy way to interpolate variables in strings.

Syntax

${...}

Example

Variable Substitutions:

let firstName = "John";

let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

From <[https://www.w3schools.com/js/js_string_templates.asp](https://www.w3schools.com/js/js_string_templates.asp)>

Interpolation: The process of automatically replacing variables or expressions in a string with their actual values at runtime.

1. JavaScript numbers -

JavaScript Numbers are Always 64-bit Floating Point

From <[https://www.w3schools.com/js/js_numbers.asp](https://www.w3schools.com/js/js_numbers.asp)>

Floating point arithmetic is not always 100% accurate

To solve it :-

Let x = (0.2 * 10 + 0.1 * 10) / 10;  

NaN = Not a Number = not a legal number

NaN is a number: typeof NaN returns number

Infinity is a number: typeof Infinity returns number.

From <[https://www.w3schools.com/js/js_numbers.asp](https://www.w3schools.com/js/js_numbers.asp)>

1. Number Methods -

toString()

toExponential()

toFixed()

The Number() Method Used on Dates

Number() can also convert a date to a number.

Example

Number(new Date("1970-01-01"))

The Date() method returns the number of milliseconds since 1.1.1970.

From <[https://www.w3schools.com/js/js_number_methods.asp](https://www.w3schools.com/js/js_number_methods.asp)>

1. Arrays -

    Arrays are a type of objects

    Arrays elements can be object or date or string or another array

In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.

From <[https://www.w3schools.com/js/js_arrays.asp](https://www.w3schools.com/js/js_arrays.asp)>

1. Array Methods -

array.splice()

array.slice()

1. Array Sort -

array.sort() - asc

array.reverse() - desc

By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

From <[https://www.w3schools.com/js/js_array_sort.asp](https://www.w3schools.com/js/js_array_sort.asp)>

The Compare Function

The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

From <[https://www.w3schools.com/js/js_array_sort.asp](https://www.w3schools.com/js/js_array_sort.asp)>

**

The Fisher Yates Method

The points.sort() method in the example above is not accurate. It will favor some numbers over others.

The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!

In JavaScript the method can be translated to this:

Example

const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {

  let j = Math.floor(Math.random() * (i+1));

  let k = points[i];

  points[i] = points[j];

  points[j] = k;

}

From <[https://www.w3schools.com/js/js_array_sort.asp](https://www.w3schools.com/js/js_array_sort.asp)>

**

Math.max.apply(null, array)

Math.min.apply(null, array)

Sorting Object arrays

cars.sort(function(a, b){

  let x = a.type.toLowerCase();

  let y = b.type.toLowerCase();

  if (x < y) {return -1;}

  if (x > y) {return 1;}

  return 0;

});

From <[https://www.w3schools.com/js/js_array_sort.asp](https://www.w3schools.com/js/js_array_sort.asp)>

1. Array Iteration -

const numbers = [40, 100, 1, 5, 25, 10];

function myFunction(value, index, array)

{

    console.log(value);

    console.log(index);

    console.log(array);

}

numbers.forEach(myFunction);

numbers.map()

numbres.filter()

These kinds are same

The reduce() method runs a function on each array element to produce a single value.

The reduce() method does not reduce the original array.

This example finds the sum of all numbers in an array:

This takes another thing as a parameter called "total" which is initially 0 at the beginning if we do not put

any value for it. But we can give a value like this -> let sum = numbers.reduce(myFunction, 100); 

Example

const numbers = [45, 4, 9, 16, 25];

let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {

  return total + value;

}

reduceRight() workes from right to left    

From <[https://www.w3schools.com/js/js_array_iteration.asp](https://www.w3schools.com/js/js_array_iteration.asp)>

array.find()  -- returns the value which to find

1. Array Const -

Const Block Scope

An array declared with const has Block Scope.

An array declared in a block is not the same as an array declared outside the block:

Example

const cars = ["Saab", "Volvo", "BMW"];

// Here cars[0] is "Saab"

{

  const cars = ["Toyota", "Volvo", "BMW"];

  // Here cars[0] is "Toyota"

}

// Here cars[0] is "Saab"

From <[https://www.w3schools.com/js/js_array_const.asp](https://www.w3schools.com/js/js_array_const.asp)>

1. JavaScript Dates -

The function who helps to create an object is called a constructor

Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:

new Date()

new Date(date string)

new Date(year,month)

new Date(year,month,day)

new Date(year,month,day,hours)

new Date(year,month,day,hours,minutes)

new Date(year,month,day,hours,minutes,seconds)

new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)

Calculates from 01-01-1970

JavaScript Stores Dates as Milliseconds

JavaScript stores dates as number of milliseconds since January 01, 1970.

Zero time is January 01, 1970 00:00:00 UTC.

One day (24 hours) is 86 400 000 milliseconds.

From <[https://www.w3schools.com/js/js_dates.asp](https://www.w3schools.com/js/js_dates.asp)>

There are 3 format to display a date

1. ECMAScript - toString() / toDateString();
2. UTC standard - toUTCString();
3. ISO standard - toISOString();  for by default Database

4. Date Formats -

There are generally 3 types of JavaScript date input formats:

|   |   |
|---|---|
|Type|Example|
|ISO Date|"2015-03-25" (The International Standard 8601)|
|Short Date|"03/25/2015"|
|Long Date|"Mar 25 2015" or "25 Mar 2015"|

From <[https://www.w3schools.com/js/js_date_formats.asp](https://www.w3schools.com/js/js_date_formats.asp)>

1. Get Date methods -

|   |   |
|---|---|
|Method|Description|
|getFullYear()|Get year as a four digit number (yyyy)|
|getMonth()|Get month as a number (0-11)|
|getDate()|Get day as a number (1-31)|
|getDay()|Get weekday as a number (0-6)|
|getHours()|Get hour (0-23)|
|getMinutes()|Get minute (0-59)|
|getSeconds()|Get second (0-59)|
|getMilliseconds()|Get millisecond (0-999)|
|getTime()|Get time (milliseconds since January 1, 1970)|

The get methods above return Local time.

From <[https://www.w3schools.com/js/js_date_methods.asp](https://www.w3schools.com/js/js_date_methods.asp)>

1. Set Date method -
2. JavaScript Math -

There are 4 common methods to round a number to an integer:

|   |   |
|---|---|
|Math.round(x)|Returns x rounded to its nearest integer|
|Math.ceil(x)|Returns x rounded up to its nearest integer|
|Math.floor(x)|Returns x rounded down to its nearest integer|
|Math.trunc(x)|Returns the integer part of x ([new in ES6](https://www.w3schools.com/js/js_es6.asp))|

From <[https://www.w3schools.com/js/js_math.asp](https://www.w3schools.com/js/js_math.asp)>

A Proper Random Function

As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.

This JavaScript function always returns a random integer between min (included) and max (excluded):

Example

function getRndInteger(min, max) {

  return Math.floor(Math.random() * (max - min) ) + min;

}

This JavaScript function always returns a random integer between min and max (both included):

Example

function getRndInteger(min, max) {

  return Math.floor(Math.random() * (max - min + 1) ) + min;

}

From <[https://www.w3schools.com/js/js_random.asp?_gl=1*1wix6lf*_ga*MTg0MTc0MDIxMS4xNzcxNjE0Mzcx*_ga_9YNMTB56NB*czE3ODEyODQ1NzQkbzQ2JGcxJHQxNzgxMjg1NzgxJGo1OSRsMCRoMA..](https://www.w3schools.com/js/js_random.asp?_gl=1*1wix6lf*_ga*MTg0MTc0MDIxMS4xNzcxNjE0Mzcx*_ga_9YNMTB56NB*czE3ODEyODQ1NzQkbzQ2JGcxJHQxNzgxMjg1NzgxJGo1OSRsMCRoMA..)>

1. Booleans -   
2. Comparisons -

Given that x = 5, the table below explains the comparison operators:

|   |   |   |   |
|---|---|---|---|
|Operator|Description|Comparing|Returns|
|==|equal to|x == 8|false|
|||x == 5|true|
|||x == "5"|true|
|===|equal value and equal type|x === 5|true|
|||x === "5"|false|
|!=|not equal|x != 8|true|
|!==|not equal value or not equal type|x !== 5|false|
|||x !== "5"|true|
|||x !== 8|true|
|>|greater than|x > 8|false|
|<|less than|x < 8|true|
|>=|greater than or equal to|x >= 8|false|
|<=|less than or equal to|x <= 8|true|

From <[https://www.w3schools.com/js/js_comparisons.asp](https://www.w3schools.com/js/js_comparisons.asp)>

Ternary Operator (? :)

Use (? :) (ternary) as a shorthand for if...else.

Example

condition ? expression1 : expression2

From <[https://www.w3schools.com/js/js_conditionals.asp](https://www.w3schools.com/js/js_conditionals.asp)>

1. Conditions -
2. For Loop -
3. For in loop -

const person = {

    name: "John",

    age: 30,

    city: "New York"

};

for(let x in person)

{

    console.log(person[x]);

}

1. For of loop -

let name = "John";

for(let x of name)

{

    console.log(x);

}

1. While loop - no need
2. Break and Continue - no need
3. Iterables -

An Iterable is an Iterable Object

Iterable can be iterated over with for...of loops

Iterating

Iterating means looping over a sequence of elements.

Here are some examples:

- Iterating over a String
- Iterating over an Array
- Iterating over a Set
- Iterating over a Map

From <[https://www.w3schools.com/js/js_iterables.asp](https://www.w3schools.com/js/js_iterables.asp)>

1. Sets - duplicates not allowed

// Create a Set

const letters = new Set(["a","b","c"]);

// List all Elements

let textt = "";

for (let x of letters) {

  textt += x;

}

console.log(textt); // Output: "abc"

**** If I do not declare anything in a variable using let, js will automatically initialize the variable with the value of undefined.

1. Maps -

JavaScript Objects vs Maps

Differences between JavaScript Objects and Maps:

|   |   |
|---|---|
|Object|Map|
|Not directly iterable|Directly iterable|
|Do not have a size property|Have a size property|
|Keys must be Strings (or Symbols)|Keys can be any datatype|
|Keys are not well ordered|Keys are ordered by insertion|
|Have default keys|Do not have default keys|

From <[https://www.w3schools.com/js/js_maps.asp](https://www.w3schools.com/js/js_maps.asp)>

1. Typeof - ****

The typeof Operator

The typeof operator returns the data type of a JavaScript variable.

JavaScript has 7 primitive data types:

- string
- number
- boolean
- bigint
- symbol
- null
- undefined

The typeof operator returns the type of a variable or an expression.

Examples

typeof "John"         // Returns string

typeof ("John"+"Doe") // Returns string

typeof 3.14           // Returns number

typeof 33             // Returns number

typeof (33 + 66)      // Returns number

typeof true           // Returns boolean

typeof false          // Returns boolean

typeof 1234n          // Returns bigint

typeof Symbol()       // Returns symbol

typeof x              // Returns undefined

From <[https://www.w3schools.com/js/js_typeof.asp](https://www.w3schools.com/js/js_typeof.asp)>

1. typeof(NAN) = number
2. typeof(array) = object
3. typeof(date) = object
4. typeof(null) = object -- but it's a bug I guess
5. typeof(something that is not defined before) = undefined **
6. typeof(function) = function

If I typeof a typeof it returns a string. Ex - typeof typeof 33

console.log("john".constructor); // Output: ƒ String() { [native code] }

function is_Array(myArray) {

    return myArray.constructor.toString().indexOf("Array") > -1;

}  

console.log(is_Array([1, 2, 3])); // Output: true

How to make a variable quickly free?  
= by setting up the value undefined

Difference Between Undefined and Null

undefined and null are equal in value but different in type:

typeof undefined      // undefined

typeof null           // object

null === undefined    // false

null == undefined     // true

From <[https://www.w3schools.com/js/js_typeof.asp](https://www.w3schools.com/js/js_typeof.asp)>