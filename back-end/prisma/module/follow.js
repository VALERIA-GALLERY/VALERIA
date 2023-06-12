// const { PrismaClient } = require('@prisma/client'); //to be used in the model
// const prisma = new PrismaClient();


// async function mutualFollowers (){ await prisma.user.findMany({
// where: {
//     follows: {
//         some: {
//           follower: {
//             followers: {
//               some: {
//                 followedId: '<userId>'
//               }
//             }
//           }
//         }
//       }
//     }
//   })
// }
  
//   module.exports = {mutualFollowers}