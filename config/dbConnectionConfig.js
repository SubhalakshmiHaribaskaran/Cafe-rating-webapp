const mongoose = require("mongoose");
const dbConnection = async () =>{
  try{
    const connect = await mongoose.connect("mongodb+srv://admin:admin@subhacluster.tcaekj0.mongodb.net/cafe_data?retryWrites=true&w=majority&appName=subhacluster");
    console.log("Database connected ",connect.connection.host,connect.connection.name);
  }
  catch{
    console.log("Failed to connect the database");
    process.exit(1);
  }
}

module.exports = dbConnection;