const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home'); // file extension is optional if the engine is set. render assumes the views folder already exists, so we don't need to write the relative path, just the file name
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
});