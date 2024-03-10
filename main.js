const express = require('express');
// value can also be writtern as express
const dotenv = require("dotenv").config();
const db = require("./config/dbConnectionConfig");

const PORT = process.env.PORT;
const app = express();

db();

// middleware
app.use(express.json());
app.use("/abc",require("./routes/route"));


app.get("/test",(req,res) =>{
  res.send("Test yaaaaaaaaaaaa");
})
app.listen(PORT,() =>{
  console.log("App is listening on "+PORT);
});