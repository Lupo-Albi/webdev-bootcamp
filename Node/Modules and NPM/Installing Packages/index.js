const jokes = require('give-me-a-joke');
const color = require('colors');
const cowsay = require('cowsay'); // Package installed globally, use npm link cowsay to require it

jokes.getRandomDadJoke(function(joke) {
    console.log(cowsay.say({    // say or think
        text : joke.rainbow,
        e : "xX",   // Eyes   
        T : "P"     // Tongue
    }));
})