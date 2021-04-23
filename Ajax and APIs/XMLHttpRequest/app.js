/* 
The "original" way of sending requests via JavaScript

Does not support promises, so... lots of callbacks!

WTF is going on with the weird capitalization?

Clunky syntax that I find difficult to remember
*/

const req = new XMLHttpRequest();

req.onload = function() {
    console.log("All done with request!!!")
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log("ERROR!!!");
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send();