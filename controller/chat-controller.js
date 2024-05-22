const chatModel = require("../models/chat-model")
const userModel = require("../models/user-model")

exports.postChat = async(req,res)=>{   

    const newChat  = new chatModel(req.body)
         
    newChat.save().then(
        res.send("chat created")
    ).catch(
        err=>console.log(err)
    )
}

exports.postMessage = async(req,res)=>{

    const {_id,message} = req.body

    const chat = await chatModel.findOne({_id})
    console.log(chat)
    
    

    chatModel.findByIdAndUpdate(_id,{'$push':{'messages':  message}}).then(
        res.send("update page")
    ).catch(
        err=>console.log(err)
    )

    // res.send("update page")

    
}

exports.getChats = async(req,res)=>{
    chatModel.find().then(
        response=>res.send(response)
    ).catch(
       err=>console.log(err)
    )
}


