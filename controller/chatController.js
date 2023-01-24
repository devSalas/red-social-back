import chatServices from "../services/chatServices.js"

const getChat =async (req,res)=>{
  const {chatId} = req.body
 const chat  = await chatServices.getChat(chatId)
 res.send(chat)

}

             
const addNewDataChat = async (data)=>{
  const {newDataChat,chatId} = data
 const chat  = await chatServices.addNewDataChat(chatId,newDataChat)
 return chat

}


const chatController={
getChat,
addNewDataChat 
}

export  default chatController