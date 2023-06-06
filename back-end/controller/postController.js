const createPost = require("../prisma/module/postModel");
const cloudinary = require("cloudinary").v2;

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
