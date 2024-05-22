const express = require("express")

const app = express()

const {postChat,getChats,postMessage} = require("../controller/chat-controller")

const bodyParser = require("body-parser")

const router = express.Router()

router.use(bodyParser.json())

router.get("/get",getChats)
router.post("/post",postChat)
router.post("/message",postMessage)
// router.delete("/message/delete")

module.exports = router