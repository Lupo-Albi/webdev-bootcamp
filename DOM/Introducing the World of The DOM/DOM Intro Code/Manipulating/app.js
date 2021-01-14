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

// classList - easy way to work with classes
const h2 = document.querySelector('h2');
console.log(h2.classList);
h2.classList.add('purple'); // add new class
console.log(h2.classList);
h2.classList.add('border'); // add new class keeping previous classes
console.log(h2.classList);
h2.classList.remove('border'); // remove class
console.log(h2.classList);
h2.classList.toggle('purple'); // toggle class purple to false
console.log(h2.classList);
h2.classList.toggle('purple'); // toggle class purple to true
console.log(h2.classList);

// appendChild
const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';
document.body.appendChild(newImg);
newImg.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'I am new!';
document.body.appendChild(newH3);

// append
const p = document.querySelector('p');
p.append('i am new text yayyy!!!', 'ASDASDASDSADASDS');

// prepend
const newB = document.createElement('b')
newB.append('HI!');
p.prepend(newB);

// insertAdjacentElement
const newH2 = document.createElement('h2');
newH2.append('Are Adorable chickens')
h1.insertAdjacentElement('afterend', newH2);

// after
const h3 = document.createElement('h3');
h3.innerText = 'I am h3'
h1.after(h3);