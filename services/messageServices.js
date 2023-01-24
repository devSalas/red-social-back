import { allMessages,data } from "../db/prueba.js"


export const getMessage = (idMessage) =>{
  const message = allMessages.find(message => message.id === idMessage)
  return message.messages
}
export const getUser = (email) =>{
  const user = data.find(user => user.email === email)
  console.log({user},10)
  return JSON.stringify(user) 
}
 

const MessageServices ={
  getMessage,
  getUser
}

export default MessageServices