axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price)
    })
    .catch(e => {
        console.log("OH NO! ERROR!", e)
    })

// const fetchBitCoinPrice = async () => {
//     try{
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch (e) {
//         console.log("OH NO! ERROR!", e)
//     }
// }