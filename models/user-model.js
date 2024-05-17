const moongose = require("mongoose")

const userSchema = new moongose.Schema({
    name:String,
    email:String,
    password:String,
})

const userModel = moongose.model("user",userSchema)

module.exports = userModel