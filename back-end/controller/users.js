const {addUser, getUserById} = require("../prisma/module/users")
const cloudinary = require("../configs/cloudinary-config")


exports.addNewUser = async (req, res) => {
  try {
    const data = req.body;

    await cloudinary.uploader.upload(data.profilePic, (err, result) => {
      if (err) {
        console.log(err);
        throw new Error('Failed to upload profile picture');
      } else {
        data.profilePic = result.secure_url;
      }
    });

    const addUserResult = await addUser(data);
    res.send(addUserResult);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getUser=async (req, res)=>{
const id=req.params.id
console.log(id)
try {
  const user= await getUserById(id)
  res.send(user)
} catch (error){
  console.error(error);
  res.status(500).send('Internal Server Error');
}
 


}
exports.get