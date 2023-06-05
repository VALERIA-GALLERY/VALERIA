const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const moment = require('moment');

async function createPost(postData) {
  const date_time = moment().format('YYYY-MM-DD HH:mm:ss');
  const completePostData = {
    ...postData,
    date_time,
  };
  
  const newPost = await prisma.posts.create({
    data: completePostData,
  });

  return newPost;
}

module.exports = createPost;