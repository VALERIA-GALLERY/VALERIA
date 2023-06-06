var express = require('express');
var router = express.Router();
const post = require("../controller/postController")



router.post('/create', post.createPost );
module.exports = router;