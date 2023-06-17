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
async function getCommentsByPost(postId) {
  const comments = await prisma.comments.findMany({
    where: { postid: postId },
  });

  const userIds = comments
    .map((comment) => comment.userid)
    .filter((userid) => userid !== null); // Filter out null values

  const users = await prisma.users.findMany({
    where: { id: { in: userIds } },
  });

  const commentsWithUsers = comments.map((comment) => {
    const user = users.find((user) => user.id === comment.userid);
    return { ...comment, user }; // Add user data to the comment
  });

  return commentsWithUsers;
}


async function addComment(commentData) {
  const newComment = await prisma.comments.create({
    data: {
      userid: commentData.user,
      postid: commentData.post,
      comment: commentData.comment,
    },
  });

  return newComment;
}

module.exports = { createPost, getAllPosts, getCommentsByPost, addComment };


