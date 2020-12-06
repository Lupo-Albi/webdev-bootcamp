let greet = function() {console.log('HI!');};

greet();

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

callTwice(rollDie);

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("Congrats, I am a good functio!n")
            console.log("You win a million dollar!")
        }
    } else {
        return function() {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max
    }

}

const isChild = makeBetweenFunc(0, 17);
const isAdult = makeBetweenFunc(18, 63);
const isSenior = makeBetweenFunc(64, 120);