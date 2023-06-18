const cloudinary = require("cloudinary").v2;
const { createPost, getAllPosts, getCommentsByUser, addComment ,getPostsById } = require("../prisma/module/postModel");

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

exports.getCommentsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const comments = await getCommentsByUser(userId);
    res.send(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};

exports.addComment = async (req, res) => {
  const { postId } = req.params;
  const { userId, comment } = req.body;

  try {
    const newComment = await addComment(postId, userId, comment);
    res.send(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};
exports.getPostsId = async (req, res) => {
  try {
    const allPostsById = await getPostsById();
    console.log(allPostsById)
    res.send(allPostsById);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};