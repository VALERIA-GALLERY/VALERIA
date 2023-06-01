const { PrismaClient } = require('@prisma/client'); //to be used in the model
const prisma = new PrismaClient();//to be used in the model

async function getUsers() {  //to be used in the model
    console.log("pass1")
  const user = await prisma.users.findMany();
  return user;
}

exports.getAll = async (req, res) => {
    console.log("pass2")
  const users = await getUsers();
  console.log("pass3")
  res.send(users);
};


async function createPost(postData) {
  console.log("psst");
  const newPost = await prisma.posts.create({
    data: postData,
  });
  return newPost;
}
exports.createPost = async (req, res) => {
  const postData = req.body; 
  const newPost = await createPost(postData);
  res.send(newPost);
};
