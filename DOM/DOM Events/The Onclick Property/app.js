const btn = document.querySelector('#v2')

btn.onclick = function() {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!!");
}

btn.onmouseenter = () => {
    console.log("AAAAAAAAAAH");
    console.log("STOP TOUCHING ME!");
}

document.querySelector('h1').onclick = () => alert('You clicked the h1!')