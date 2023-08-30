//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// const favfood = (whoever) => {
//     for (let foods in whoever) {
//         console.log(`my favorite `)
//     }
// }
// i tried for loops, will definatley need help in this area :(
// let favefoods = (name) => {
//     for (let food in name) {
//         console.log(`this is my favorite ${food}`)

//         for (_) {
//             console.log(` ${name[food][0]}  ${subProperty}`)
//         }
//     }
// }
// console.log(favefoods(person3)) ;'(

console.log(`My favorite pizza is ${person3.pizza[0]}`)
console.log(`But my other favorite pizza is ${person3.pizza[1]}`)

console.log(`My favorite tacos are ${person3.tacos}`)

console.log(`My favorite burgers are ${person3.burgers}`)

console.log(`My favorite ice cream #1 is ${person3.ice_cream[0]}`)
console.log(`My favorite ice cream #2 is ${person3.ice_cream[1]}`)
console.log(`My favorite ice cream #3 is ${person3.ice_cream[2]}`)

console.log(`My favorite shake from ${Object.keys(person3.shakes[0])[0]} is ${person3.shakes[0].oberwise}`)
console.log(`My favorite shake from ${Object.keys(person3.shakes[0])[1]} is ${person3.shakes[0].dunkin}`)
console.log(`My favorite shakes from ${Object.keys(person3.shakes[0])[2]} are ${person3.shakes[0].culvers}`)
console.log(`My favorite shake from ${Object.keys(person3.shakes[0])[3]} is the ${person3.shakes[0].mcDonalds}`)
console.log(`My favorite shake from ${Object.keys(person3.shakes[0])[4]} is ${person3.shakes[0].cupids_candies}`)

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // addToAge = (age) => {
    //     person.age += 1;
    // }
    increase = (age) => {
        this.age += 1;
        console.log('Happy birthday D :)')
    }
    printInfo = (name, age) => {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

const personA = new Person("Dylan K", 24)
const personB = new Person("Omar G", 27)

personA.printInfo()
personB.printInfo()

personA.increase()
personA.increase()
personA.increase()

personA.printInfo()


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const driverStandings = async () => {
    try {
        const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
        const data = await response.json()
        console.log(data)
    }
    catch {
        console.log('failed')
    }
}
driverStandings()
//  my breakdown of whats happening here:
// -async means that the function returs a promise & can use the await keyword to wait for the operation to complete
// -inside the function a catch block is used to handle anyu errors that might occur when fetchind data
// -in the try block (which allows you to define a block of code to be executed...) fetch() is called with the url of the 
// desired API endpoint.that method returns a promise that resolves with a response object when the data is 
// successfuylly fetched from API
// -the await keyword is used to wait for the fetch() method to complete and the resulting response onvjecet is 
// ?assigned to the response variable.
// -the .json() method is called on the response object to extract the data from it as a Javascript object. This method
// also returns a promise that resolves with the data when it;s extracted
// the await keyword is used again to wait for the .json() method to complete and the resultind data is assigned to const data
// -then the data is logged to console
// -if errors occur when fetching data, it will be caught by the catch blick
// -call the function at the end to fetch data from API and log to console

// -----------------------------------   CODEWARS   -----------------------

// - problem #1 - previously solved in python now solved in JavaScript-----

// Find Maximum and Minimum Values of a List
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// https://www.w3schools.com/js/js_math.asp - resource 
// https://www.w3schools.com/react/react_es6_spread.asp - also had to look up why it didnt originally work
// i was missing the '...' - spread operator  it says react but underneath is says:
// "The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or 
// object into another array or object.""

let min = function(list) {
    return Math.min(...list)
}

let max = function(list) {
    return Math.max(...list)
}

console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));

// - problem #2 - freshie, only solved in JavaScript-----

// Convert a string to an array
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// im gonna try to use .split() as I would in python..


function stringToArray(string) {
    return string = string.split(" ");
}


console.log(stringToArray("Robin Singh"));

// 

let strToArray = string => string.split(" ")

console.log(strToArray("I love arrays they are my favorite"));

// let strToArray = (string) => string.split(" ")