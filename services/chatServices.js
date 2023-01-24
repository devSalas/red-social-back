import ChatModels from "../Models/message.js"

const getChat = (id)=>{
  return ChatModels.findById(id)
}

const addNewDataChat =(ChatId,newDataChat)=>{
  return ChatModels.findByIdAndUpdate(ChatId,{$push:{messages:newDataChat}})
} 

const chatServices ={
getChat,
addNewDataChat 
}

export default chatServices