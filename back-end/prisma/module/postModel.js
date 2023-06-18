const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment");


async function createPost(postData) {
  const date_time = moment().format("YYYY-MM-DD HH:mm:ss");
  const completePostData = {
    ...postData,
    date_time,
    pic: [...postData.pic], // Wrap the single picture URL in an array
  };

  const newPost = await prisma.posts.create({
    data: completePostData,
  });

  return newPost;
}



async function getAllPosts() {
  const posts = await prisma.posts.findMany({
    include: {
      users: true,
    },
  });

  return posts;
}


async function getCommentsByUser(userId) {
  const comments = await prisma.comments.findMany({
    where: {
      userid: userId,
    },
  });

  const commentsWithPost = [];

  for (const comment of comments) {
    const post = await prisma.posts.findUnique({
      where: {
        id: comment.postid,
      },
      include: {
        users: true,
      },
    });

    commentsWithPost.push({
      ...comment,
      post,
    });
  }

  return commentsWithPost;
}


async function addComment(postId, userId, comment) {
  const newComment = await prisma.comments.create({
    data: {
      comment,
      userid: userId,
      postid: postId,
    },
  });

  const post = await prisma.posts.findUnique({
    where: {
      id: postId,
    },
    include: {
      users: true,
    },
  });

  return {
    ...newComment,
    post,
  };
}
async function getPostsById(userid) {
  const posts = await prisma.posts.findMany({
    where: {
      userid: userid,
    }
  });
  return posts
}


module.exports = { createPost, getAllPosts, getCommentsByUser, addComment ,getPostsById };