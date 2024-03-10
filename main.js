const express = require('express');
// value can also be writtern as express
const dotenv = require("dotenv").config();
const db = require("./config/dbConnectionConfig.js");

const PORT = process.env.PORT;
const app = express();

db();

app.get("/",(req,res) => {
  res.send("Hellos");
})

app.get("/test",(req,res) =>{
  res.send("Test yaaaaaaaaaaaa");
})
app.listen(PORT,() =>{
  console.log("App is listening on "+PORT);
});