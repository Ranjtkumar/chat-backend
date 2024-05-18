const express = require("express")
require("dotenv").config()

const connectDB = require("./config/db")
connectDB()



const cors = require("cors")



const user = require("./routes/user")

const app = express()

app.use(cors())

app.use("/user",user)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port no ${process.env.PORT}`)
})