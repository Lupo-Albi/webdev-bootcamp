const buttons = document.querySelectorAll('button');
for(let button of buttons) {
    // Using a function and the keyword this, we can make our code reusable with we want the same feature to happen multiple times
    button.addEventListener('click', colorize);
    // Following lines give the same result as above, but it's not reusable
    // button.addEventListener('click', () => {
    //     button.style.backgroundColor = makeRandColor();
    //     button.style.color = makeRandColor();
    // })
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
    // h1.addEventListener('click', () => {
    //     h1.style.backgroundColor = makeRandColor();
    //     h1.style.color = makeRandColor();
    // })
}

function makeRandColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// The keyword this refers to the element that is waiting for the event to happens
// the keyword this, when you have it inside a callback that is invoked by some event handler will refer to the element of this event
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}