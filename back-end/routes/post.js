const express = require("express");
const router = express.Router();
const post = require("../controller/postController");

router.post("/create", post.createPost);
router.get("/", post.getAll);

 

router.get("/comments/:userId", post.getCommentsByUser);
router.post("/comments/:postId", post.addComment);

module.exports = router;
