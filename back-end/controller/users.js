const {addUser} = require("../prisma/module/users")
const cloudinary = require("../configs/cloudinary-config")



exports.addNewUser = async (req, res) => {
    const data = req.body

   await cloudinary.uploader.upload(data.profilePic, (err, result) => {
        if (err) {
        console.log(err)
        } else {
          data.profilePic = result.secure_url;
         
         
        }
        
      })
      const adduser= await addUser(data)

  
res.send(adduser)
      
};