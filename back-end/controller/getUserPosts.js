const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUserPosts(req, res) {
    const userId = req.params.id;
  
    try {
      const user = await prisma.users.findUnique({
        where: { id: userId }      });
      res.send(user.posts);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving user posts");
    }
  }
  module.exports = {getUserPosts}