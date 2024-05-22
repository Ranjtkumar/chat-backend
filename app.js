const express = require("express")
require("dotenv").config()

const connectDB = require("./config/db")
connectDB()

const cors = require("cors")

const user = require("./routes/user")
const chat = require("./routes/chat")

const app = express()

app.use(cors())

app.use("/user",user)

app.use("/chat",chat)

app.listen(3002,()=>{
    console.log(`server is running on port no 3002`)
})