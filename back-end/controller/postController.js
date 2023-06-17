const cloudinary = require("cloudinary").v2;
const { createPost, getAllPosts, getCommentsByPost, addComment } = require("../prisma/module/postModel");

cloudinary.config({
  cloud_name: "di9jvr1du",
  api_key: "541267681874831",
  api_secret: "ygL3tYqGyGvZr4yaxw6_3ZR4R34",
});

exports.createPost = async (req, res) => {
  const data = req.body;

  try {
    if (data.pic) {
      // Multiple pictures were uploaded
      const picUrls = [];
      for (const pic of data.pic) {
        const result = await cloudinary.uploader.upload(pic);
        picUrls.push(result.secure_url);
      }
      data.pic = picUrls;
    } else {
      // Single picture was uploaded
      const result = await cloudinary.uploader.upload(data.pic);
      data.pic = result.secure_url;
    }

    const newPost = await createPost(data);
    res.send(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};

exports.getAll = async (req, res) => {
  try {
    const allPosts = await getAllPosts();
    res.send(allPosts);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};


exports.getCommentsByPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await getCommentsByPost(postId);
    res.send(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

exports.addComment = async (req, res) => {
  const commentData = req.body;

  try {
    const newComment = await addComment(commentData);
    res.send(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};