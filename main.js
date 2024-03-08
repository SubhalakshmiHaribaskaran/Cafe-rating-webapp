const express = require('express');
// value can also be writtern as express
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.listen(PORT,() =>{
  console.log("App is listening on "+PORT);
});