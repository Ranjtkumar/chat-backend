const express = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Chat")

mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected successfully")
})

const user = require("./routes/user")

const app = express()

app.use("/user",user)

app.listen(3002,()=>{
    console.log("server is running on port no 3002")
})