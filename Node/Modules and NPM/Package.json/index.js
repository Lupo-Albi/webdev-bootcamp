// npm init to star a npm project with package.json and package-lock.json

const figlet = require('figlet');
const colors = require('colors');

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.blue)
});