const { PrismaClient } = require('@prisma/client'); //to be used in the model
const prisma = new PrismaClient();



async function addUser(data) {  
  console.log(data)
  const user = await prisma.users.create({
    data: { id : data.id,
    username : data.username,
    firstName:  "data.firstName", //check this in the front
    lastName  : "data.lastName",
    password  : "data.password",
    profilePic: data.profilePic,
    artist  :   false,
    followers : data.followers,
    birthday :  data.birthday,
    follows    :data.follows,
    }
  })

  
}

module.exports = {addUser}