import messageServices from "../services/messageServices.js"

const getMessage=(req,res) => {
  console.log(req.body)
  res.send({message:"hola"})

} 

const getUser=(req,res)=>{
  const user= messageServices.getUser(req.body)
  res.send(user)
}


 const messageControllers={
  getMessage,
  getUser
}



export default messageControllers