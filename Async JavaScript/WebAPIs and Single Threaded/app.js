console.log("Sending request to server!");
setTimeout(() => {
    console.log("Here is your data from the server...")
}, 3000) // Hey Browser, can you set a timer for 3 seconds?
console.log("I AM AT THE END OF THE FILE!"); 

/* 
 * Console output:
 * Sending request to server!
 * I am at the end of the file
 * Here is your data from the server...
*/