const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUser(userId) {
  const user = await prisma.users.findUnique({
    where: { id: userId },
  });
  return user;
}

module.exports = getUser;