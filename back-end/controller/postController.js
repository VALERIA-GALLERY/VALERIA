const {createPost} = require("../prisma/module/postModel");
const cloudinary = require("cloudinary").v2;
const {getAllPosts}=require('../prisma/module/postModel')
cloudinary.config({
  cloud_name: "di9jvr1du",
  api_key: "541267681874831",
  api_secret: "ygL3tYqGyGvZr4yaxw6_3ZR4R34",
}); 
exports.createPost = async (req, res) => {
  const data = req.body;
  console.log(data);
  await cloudinary.uploader.upload(data.pic, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      
      data.pic = result.secure_url;
    } 
  });
  const newPost = await createPost(data);

  res.send(newPost);
};

exports.getAll = async (req, res) => {
  try {  const allPosts = await getAllPosts(); 

    res.send(allPosts); 
  } catch (error) {
    console.error(error);
    res.status(500).send('we have an error');
  }
} 