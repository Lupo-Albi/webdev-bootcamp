const express = require("express");
// import express from "express";
const app = express();
// console.dir(app);
app.use((req, res) => {
    console.log("We got a new request!");
    // console.dir(req)
    // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!");
    // res.send({ color: 'red' });
    res.send('<h1>This is my webpage</h1>');
});
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
});