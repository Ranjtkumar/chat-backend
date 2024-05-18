const moongose = require("mongoose")
const { type } = require("os")

const userSchema = new moongose.Schema({
    userame:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    activationCode:{
        type:String,
        required:true,
        default:null
    },
    isActivated:{
        type:String,
        required:true,
        default:false
    }

})

const userModel = moongose.model("user",userSchema)

module.exports = userModel