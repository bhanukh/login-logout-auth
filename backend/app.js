require("dotenv").config();
const express = require("express");
const app = express();
require("./config/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = process.env.PORT || 8888;


// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);
 
if(process.env.NODE_ENV == "production"){
    express.use(express.static("front/build"))
}

app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})