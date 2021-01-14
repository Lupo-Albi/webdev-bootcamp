const allLinks = document.querySelectorAll('a');

// innerText, textContent and innerHTML
for (let link of allLinks) {
    link.innerText = "I'M A LINK!"
}