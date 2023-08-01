const mongoose= require("mongoose")

require("dotenv").config();
const url=process.env.CONN_URL;
const connectWithDB=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("Database connection is successfull"))
    .catch((error)=>{
        console.log("Error found while connecting with the database");
        console.log(error);
        process.exit(1);
    })
};

module.exports=connectWithDB;