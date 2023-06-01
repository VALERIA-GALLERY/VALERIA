const { PrismaClient } = require('@prisma/client'); //to be used in the model
const prisma = new PrismaClient();//to be used in the model

async function getUser(req, res) {
  const userId = req.params.id; // Assuming you pass the user ID in the request params
  
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

module.exports = {
  getUser
};
