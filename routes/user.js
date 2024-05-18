const express = require("express")

const router = express.Router()

const bodyParser = require("body-parser")

router.use(bodyParser.json())

const userModel = require("../models/user-model")

router.get("/get",(req,res)=>{

    userModel.find().then(
        response=>res.send(response)
    ).catch(
        err=>console.log(err)
    )
})

router.get("/get/:id",(req,res)=>{

    userModel.findById(req.params.id).then(
        response=>res.send(response)
    ).catch(
        err=>console.log(err)
    )
})

router.post("/post",(req,res)=>{
    const newUser = new userModel(req.body)

    newUser.save().then(
        response=>res.send(response)
    ).catch(
        err=>console.log(err)
    )

    
})

module.exports = router