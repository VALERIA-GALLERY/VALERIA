const { PrismaClient } = require('@prisma/client'); //to be used in the model
const prisma = new PrismaClient();//to be used in the model

async function getUser(req, res) {
  const userId = req.params.id; 
  
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) }
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
async function updateUser(req, res) {
    const userId = req.params.id;  
    const { username, password, profilePic } = req.body;
  
    try {
      const updatedUser = await prisma.users.update({
        where: { id: Number(userId) },
        data: {
          username,
          password,
          profilePic,
        },
      });
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

module.exports = {
  getUser,updateUser
};
