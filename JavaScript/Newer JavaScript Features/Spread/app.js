// Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pair (for object literals) are expected.

// Spread in function calls
const nums = [9, 3, 2, 8];
Math.max(nums); //NaN
// Use spread!
console.log(Math.max(...nums)); //9
// Same as calling:
// Math.max(9,3,2,8)

// Spread with Array Literals
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];
console.log(allPets);
console.log([..."hello"]);

// Spread with Object Literals
// Copies properties from one object into another object literal
const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };

const dog = { ...canine, isPet: true };
// {family: 'Caninae', furry: true, isPet: true}
const lion = { ...feline, genus: 'Panthera' };
// {legs: 4, family: 'Felidae', genus: 'Panthera'}
const catDog = { ...feline, ...canine };
// {legs: 4, family: 'Caninae', furry: true}

// Spreading an array into an object
console.log({...[2, 4, 6, 8]})
// {0: 2, 1: 4, 2: 6, 3: 8}

// Spreading a string into an object
console.log({..."HELLO"});
// {0: "H", 1: "E", 2: "L", 3: "L", 4: "O"}

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = {...dataFromForm, id: 2345, isAdmin: false};