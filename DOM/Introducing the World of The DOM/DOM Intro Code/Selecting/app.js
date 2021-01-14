// getElementsByTagName
const allImages = document.getElementsByTagName('img');

for (let image of allImages) {
    // console.log(image.src)
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
}

// getElementsByClassName
const squareImages = document.getElementsByClassName('square');

for (let image of squareImages) {
    image.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png'
}

// querySelectorAll
const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}