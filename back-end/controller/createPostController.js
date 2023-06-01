const createPost = require("../prisma/module/createModel");

exports.createPost = async (req, res) => {
    const postData = req.body; 
    const newPost = await createPost(postData);
    res.send(newPost);
  };
  