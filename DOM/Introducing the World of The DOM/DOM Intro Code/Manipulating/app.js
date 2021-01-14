const allLinks = document.querySelectorAll('a');

// innerText, textContent and innerHTML
for (let link of allLinks) {
    link.innerText = "I'M A LINK!"
}

// Changing styles
const h1 = document.querySelector('h1');
h1.style.color = 'green';
h1.style.fontSize = '3em';
h1.style.border = '2px solid pink';
// These are inline style changes
// Doing it one at a time is annoying
// Inline styles changes are not ideal

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

console.log(window.getComputedStyle(h1).color);
console.log(window.getComputedStyle(h1).fontFamily);
console.log(window.getComputedStyle(h1).margin);