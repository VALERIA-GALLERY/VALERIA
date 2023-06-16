const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const moment = require("moment");


async function createConversation(res) {

  const ischat = await prisma.chat.findMany({
    where: {
      users: {
        hasEvery: [res.user1, res.user2],
      },
    },
  });
  console.log(ischat);
  if (ischat.length>0){
    const messages = await prisma.messages.findMany({
      where: {
        chat: ischat[0].id,
      },
    });
    return [ischat,messages]
  }
else {


  
  const conversation = await prisma.chat.create({
    data: {
      
      users: [res.user1, res.user2],
    
      latestmessage: "",
   
    },
  });
console.log(conversation)
 return [[conversation],[]]
}
    
  }

  async function findUsers(res) {
    const users = await prisma.users.findMany({
      where: {
        AND: [
          { id: res.user1 },
          { id: res.user2 },
        ],
      },
    });
  
 return users
  }

async function handleMessage(msg){
  const message = await prisma.messages.create({
    data: msg
  });
return message
}


  module.exports ={createConversation,findUsers, handleMessage}
  