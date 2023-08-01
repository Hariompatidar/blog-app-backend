const express=require("express")
const app=express();

require("dotenv").config();
const port=process.env.PORT || 8000;

app.use(express.json());

const blog=require('./routes/blog');
app.use("/api/v1",blog);

const connectWithDB=require("./config/database");
connectWithDB();

app.listen(port,()=>{
    console.log(`App listening at the port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("<h1>This is Home page baby.</h1>")
})