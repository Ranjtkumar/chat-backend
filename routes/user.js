const express = require("express")

const router = express.Router()

const bodyParser = require("body-parser")

router.use(bodyParser.json())

const userModel = require("../models/user-model")

router.get("/get",(req,res)=>{

    res.send("User get age")
})

router.post("/post",(req,res)=>{
    const newUser = new userModel(req.body)

    newUser.save().then(
        response=>console.log(response)
    ).catch(
        err=>console.log(err)
    )

    res.send("user post page")
})

module.exports = router