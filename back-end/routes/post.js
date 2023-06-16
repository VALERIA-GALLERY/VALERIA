var express = require("express");
var router = express.Router();

const post = require("../controller/postController");

router.post("/create", post.createPost);
router.get("/", post.getAll);
module.exports = router
 