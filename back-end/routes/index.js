var express = require('express');
var router = express.Router();
var user = require("../controller/test")
const post = require("../controller/postController")

/* GET home page. */
router.get('/', user.getAll);
/* Create a post */
router.post('/post', post.createPost );


module.exports = router;
