const userModel = require("../models/user-model")
const {v4:uudiv4} = require("uuid")

const bycrypt = require("bcryptjs")

const nodeMailer = require("nodemailer")

exports.signUp = async(req,res)=>{
    console.log(req.body)
    const {username,email,password} = req.body

    let user = await userModel.findOne({email})

    if(user){
        return res.status(200).json({message:"Email already exsist"})
    }

    const activationCode = uudiv4()

    const salt = await bycrypt.genSalt(5)

    console.log(salt)

    const hashPassword = await bycrypt.hash(password,salt)
    
    user = new userModel({
        username,email,password:hashPassword,activationCode
    })

    await user.save()

    const transport = nodeMailer.createTransport({
        host:"smtp.hostinger.com",
        port:465,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS

        }
    })

    const activationLink = `http://localhost:3002/auth/activate/${activationCode}`

    const mailOption = {
        from:process.env.EMAIL_USER,
        to:email,
        subject:"Please verify your email address",
        text:`click link to verify your email address for application ${activationLink}`
    }

    transport.sendMail(mailOption,(err,info)=>{
        if(err){
            console.log(err)
            // return res.status(500).json({message:"Cannot send Activation link"})
        }else{
            return res.status(200).json({message:"Activation link sent to your email please verify to proceed login"})
        }
    })


}

exports.getUsers = (req,res)=>{
    userModel.find().then(
        response=>res.send(response)
    ).catch(
        err=>console.log(err)
    )
}

