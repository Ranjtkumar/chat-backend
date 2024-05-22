const moongose = require("mongoose")



const messageSchema = new moongose.Schema({
    type:String,
    text:String,
    sendBy:String,
    isReadonly:Boolean,
})

const chatSchema =  new moongose.Schema({
    users:[String],
    type:String, 
    createdBy:String,
    messages:{
        type:[messageSchema],
    }
})

const chatModel = moongose.model("chats",chatSchema)

module.exports = chatModel