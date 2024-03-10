const express = require("express");

const router = express.Router();

router.get("/def",(req,res) => {
  res.send("Hellos");
});
router.get("/come",(req,res) => {
  res.send("Hello come");
});


module.exports = router;