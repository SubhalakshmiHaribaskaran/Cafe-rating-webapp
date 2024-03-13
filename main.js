const express = require('express');
// value can also be writtern as express
const dotenv = require("dotenv").config();
const db = require("./config/dbConnectionConfig");
const bodyParser = require('body-parser');
const session = require("express-session");

const PORT = process.env.PORT;
const app = express();

db();
// session middleware
app.use(
    session({
        secret : "my secret key",
        saveUninitialized : true,
        resave: false,
    })
);
app.use((req,res,next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});
// Add body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// middleware
app.use(express.json());
app.use("/",require("./routes/route"));

// to use ejs template
app.set("view engine","ejs");

app.get("/test",(req,res) =>{
  res.send("Test yaaaaaaaaaaaa");
})
app.listen(PORT,() =>{
  console.log("App is listening on "+PORT);
}); 