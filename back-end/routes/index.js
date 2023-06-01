var express = require('express');
var router = express.Router();
var user = require("../controller/test")
const create = require("../controller/createPostController")

/* GET home page. */
router.get('/', user.getAll);
/* Create a post */
router.post('/post', create.createPost );


module.exports = router;
