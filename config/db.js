const mongoose = require("mongoose")

const connectDB = ()=>{
    mongoose.connect(process.env.DB_URL)
    mongoose.connection.on("connected",()=>{
        console.log("MongoDB connected successfully")
    })
}

module.exports = connectDB