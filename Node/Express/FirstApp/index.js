const express = require("express");
// import express from "express";
const app = express();
// console.dir(app);
app.use(() => {
    console.log("We got a new request!");
});
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
});