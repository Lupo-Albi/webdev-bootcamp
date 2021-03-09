const myInput = document.querySelector('input');
const myH1 = document.querySelector('h1');

// Whenever a modification occurs and the user leaves the element
myInput.addEventListener('change', function(e){
    console.log("TEST");
});

// Whenever a modification occurs
myInput.addEventListener('input', function(e){
    myH1.innerText = myInput.value;
})