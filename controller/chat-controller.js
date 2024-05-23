const chatModel = require("../models/chat-model")

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
    
    

    chatModel.findByIdAndUpdate(_id,{'$push':{'messages':  message}}).then(
        res.send("update page")
    ).catch(
        err=>console.log(err)
    )

    
}

exports.getChats = async(req,res)=>{
    chatModel.find().then(
        response=>res.send(response)
    ).catch(
       err=>console.log(err)
    )
}


exports.deleteMessage = async(req,res)=>{

    chatModel.findByIdAndUpdate(req.params.id,{'$pull':{'messages': {_id:req.params.msgid}}}).then(
        res.send("delete page")
    ).catch(
        err=>console.log(err)
    )

}


