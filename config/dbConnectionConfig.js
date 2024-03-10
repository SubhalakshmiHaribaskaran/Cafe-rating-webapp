const mongoose = require("mongoose");
const dbConnection = async () =>{
  try{
    const connect = await mongoose.connect("mongodb+srv://admin:admin@subhacluster.tcaekj0.mongodb.net/?retryWrites=true&w=majority&appName=subhacluster");
  }
}