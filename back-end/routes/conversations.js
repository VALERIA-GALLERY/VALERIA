var express = require('express');
var router = express.Router();
const {newConversation}=require("../controller/allConversatios")


router.post("/start",newConversation)

module.exports = router