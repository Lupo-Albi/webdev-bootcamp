const express = require("express");
// import express from "express";
const app = express();
// console.dir(app);
// We can't have a http request that gets more than one response
// app.use((req, res) => {
//     console.log("We got a new request!");
//     // console.dir(req)
//     // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!");
//     // res.send({ color: 'red' });
//     res.send('<h1>This is my webpage</h1>');
// });

// /cats => 'meow'
// /dogs => 'woof
// '/'

app.get('/', (req, res) => {
    res.send('This is the homepage!')  ;
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cast!!! THIS IS DIFFERENT THAN A GET REQUEST!!');
})

app.get('/cats', (req, res) => {
    // console.log("CAT REQUEST!!!");
    res.send('MEOW!!!');
});

app.get('/dogs', (req, res) => {
    res.send('WOOF!');
})

// Don't put that first
app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
});

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
});