const { PrismaClient } = require('@prisma/client'); 
const prisma = new PrismaClient();

async function createPost(postData) {
    console.log("psst");
    const newPost = await prisma.posts.create({
      data: postData,
    });
    return newPost;
  }

  module.exports = createPost;