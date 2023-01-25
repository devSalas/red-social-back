import ChatModels from "../Models/message.js"

const getChat = (id)=>{
  return ChatModels.findById(id)
}

const addNewDataChat =(ChatId,newDataChat)=>{
  return ChatModels.findByIdAndUpdate(ChatId,{$push:{messages:newDataChat}})
} 

const deleteMessageChat = (id)=>{
  return ChatModels.findByIdAndUpdate(id, { messages:[] })
}

const chatServices ={
getChat,
addNewDataChat,
deleteMessageChat
}

export default chatServices