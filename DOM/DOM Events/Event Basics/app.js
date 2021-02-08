const btn2 = document.querySelector('#v2')

btn2.onclick = function() {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!!");
}

btn2.onmouseenter = () => {
    console.log("AAAAAAAAAAH");
    console.log("STOP TOUCHING ME!");
}

document.querySelector('h1').onclick = () => alert('You clicked the h1!')

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('CLICKED');
})

// 

function twist() {
    console.log("TWIST!");
}

function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');
// Can't have two different callback functions with this approach
/* tasButton.onclick = twist;
tasButton.onclick = shout; */
// It will only print shout

// Doing the same with addEventListener
tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);

