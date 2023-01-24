import userServices from "../services/userServices.js"

const getUser = async (req,res)=>{
  const {id} = req.body
  console.log({id,n:5})
  const user =  await userServices.getUser(id)
  res.send(user)
}
const createUser = async (req,res)=>{
  const {email} = req.body
  const user =  await userServices.getUser(email)
  res.send(user)
}



const userController = {
getUser
}

export default userController;