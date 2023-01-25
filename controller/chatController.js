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

const deleteMessageChat =async (req,res)=>{
  const {id} = req.params
  console.log({id},20)
 const chat  = await chatServices.deleteMessageChat(id)

 if(chat === null) { return {messasges:"Ocurrio un error, y no se puedo eliminar",status:404, isError:true, error:null}} 
 if(chat.messages.length ==0){ return res.send( {messasges:"se elimino correctamente",status:200, isError:false})
}else{
  return res.send({messasges:"Ocurrio un error, y no se puedo eliminar",status:404, isError:true})
}



}


const chatController={
getChat,
addNewDataChat,
deleteMessageChat
}

export  default chatController