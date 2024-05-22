const express = require("express")

const router = express.Router()

const bodyParser = require("body-parser")

router.use(bodyParser.json())


const {signUp,getUsers} = require("../controller/auth-controller")


router.post("/signup",signUp)
router.get("/get",getUsers)


module.exports = router