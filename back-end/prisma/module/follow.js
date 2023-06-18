const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
// const { v4: uuidv4 } = require('uuid');


async function addFollow(data) {
  const { current_user_id, foreign_user_ids } = data;
  console.log(data)
  try {
    const follow = await prisma.follows.create({
        data: {
          current_user_ids: current_user_id,
          foreign_user_ids: foreign_user_ids,
          }
        });
        console.log(follow);
        return follow
  } catch (error) {  
    console.error(error);
  }
}
   


async function getAllCurrent() {
  try {
    const currentFollow = await prisma.follows.findMany({
      select: {
        current_user_ids: true,
      },
    });
    return currentFollow.flatMap(userFollow => userFollow.current_user_ids);
  } catch (error) {
    console.error(error);
  }
}

async function getAllForeign() {
  try {
    const foreignUsers = await prisma.follows.findMany({
      select: {
        foreign_user_ids: true,
      },
    });
    return foreignUsers.flatMap(userFollow => userFollow.foreign_user_ids);
  } catch (error) {
    console.error(error); 
  }
}

module.exports = {addFollow , getAllCurrent,getAllForeign}
