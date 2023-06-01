var express = require('express');
var router = express.Router();
var user = require("../controller/test")

/* GET home page. */
router.get('/', user.getAll);
/* Create a post */
router.post('/post', user.createPost);


module.exports = router;
