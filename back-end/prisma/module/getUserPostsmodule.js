
async function getUserPosts(userId) {
    const user = await getUser(userId);
    return user.posts;
  }

  module.exports = getUserPosts;
  