const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function() {
    const newColor = makeRandColor();
    const textColor = `rgb(${newColor})`;
    document.body.style.backgroundColor = textColor;
    h1.innerText = textColor;
    h1.style.color = isDarkColor(newColor) ? 'white' : 'black';
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = [r, g, b];
    return rgb;
}

function isDarkColor(color) {
    // https://www.w3.org/TR/AERT/#color-contrast
    const brightness = Math.round(((parseInt(color[0]) * 299) + (parseInt(color[1]) * 587) + (parseInt(color[2]) * 114)) / 1000);
    return brightness < 125;
}