const express = require("express");
const router = express.Router();
const post = require("../controller/postController");

router.post("/create", post.createPost);
router.get("/", post.getAll);
router.get("/:postId/comments", post.getCommentsByPost);
router.post("/:postId/comments", post.addComment);

module.exports = router;
