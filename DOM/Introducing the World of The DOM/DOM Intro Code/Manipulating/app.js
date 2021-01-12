// getElementsByTagName
// const allImages = document.getElementsByTagName('img');
// for (let image of allImages) {
//     console.log(image.src)
//     image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
// }

// getElementsByClassName
// const squareImages = document.getElementsByClassName('square');
// for (let image of squareImages) {
//     image.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png'
// }

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}