const express = require("express");
const Object = require("../models/model");

const router = express.Router();

router.get("/", async (req,res) => {
  try{
    const cafes = await Object.find();
    res.render("home" , {
      title:"Home Page",
      data : cafes
    });
  }
  catch(error){
    console.log("errors");
  }
  // [{"_id":"65edccc34d80fceb03c2641a","name":"Pizzahut","phone":"232174","reviewSum":0,"reviewCount":0,"__v":0},
  // {"_id":"65edcd2757d3bec4c7702723","name":"Dominoz","phone":"334455","reviewSum":0,"reviewCount":0,"__v":0},
  // {"_id":"65eea878782d01e8cc708db7","name":"Pizzahut","phone":"232174","reviewSum":0,"reviewCount":0,"__v":0}]
});
// Creating a get method for /add
router.get("/add",(req,res)=>{
  res.render("add_cafe",{
    title:"Add New Cafe"
  });
})
// Creating a post request , getting value from the user and doing what we want to do
router.post("/add", async(req,res) =>{
  console.log("name : "+ req.body.name);
  try{
    const cafe = new Object({
      name : req.body.name,
      phone : req.body.phone,
      reviewSum : 0,
      reviewCount :0
    });
    await cafe.save();
    console.log("Save the new cafe:"+ cafe);
  }
  catch{
    console.log("Error while adding a new cafe"); 
  }
});
// To test this route we are using thunderclient 

module.exports = router;