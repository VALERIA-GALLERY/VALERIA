const {createConversation, findUsers, handleMessage}=require("../prisma/module/conversations")



exports.newConversation = async (req, res) => {
    try {
      const data = req.body;
  
    
  
      const createNewConversation = await createConversation(data);
     
      res.send(createNewConversation);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  exports.newMessage= async (req, res) =>{

    try {
      const msg = req.body;


      const createmsg = await handleMessage(msg)
      res.send(createmsg);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }