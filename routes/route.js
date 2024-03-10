const express = require("express");

const router = express.Router();

router.get("/",(req,res) => {
  res.send("Hellos");
});
// Creating a post request , getting value from the user and doing what we want to do
router.post("/add", (req,res) =>{
  console.log(req.body);
})
// To test this route we are using thunderclient 

module.exports = router;