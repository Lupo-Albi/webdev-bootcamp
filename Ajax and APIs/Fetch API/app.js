/*
Fetch
The newer way of making requests via JS

Supports promises!

Not supported in Internet Explorer!
*/

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("Response, waiting to be parsed...", res)
        return res.json()
    })
    .then(data => {
        console.log("Data Parsed")
        console.log("Bit Coin Price:", data.ticker.price)
    })
    .catch(e => {
        console.log("OH NO! ERROR!", e)
    })

// With Async and Await
    // const fetchBitCoinPrice = async () => {
    //     try{
    //         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    //         const data = await res.json()
    //         console.log(data.ticker.price)
    //     } catch (e) {
    //         console.log("SOMETHING WENT WRONG!", e)
    //     }
    // }