var express = require('express');
var router = express.Router();
var user = require("../controller/test")
var us=require("../controller/profile")

/* GET home page. */
router.get('/', user.getAll);

router.get('/user',us.getUser)

module.exports = router;
