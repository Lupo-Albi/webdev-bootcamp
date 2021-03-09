const button = document.querySelector('div button');
const container = document.querySelector('#container');

button.addEventListener('click', (e) => {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();  // Stop Bubbling
});

container.addEventListener('click', () => {
    container.classList.toggle('hide');
});

const makeRandColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

