var express = require('express');
var router = express.Router();
var user = require("../controller/test")

/* GET home page. */
router.get('/', user.getAll);

module.exports = router;
