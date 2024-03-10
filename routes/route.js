const express = require("express");
const Object = require("../models/model");

const router = express.Router();

router.get("/",(req,res) => {
  res.send("Hellos");
});
// Creating a post request , getting value from the user and doing what we want to do
router.post("/add", async(req,res) =>{
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