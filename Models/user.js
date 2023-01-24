import { Schema,model } from "mongoose";
import connectDB from "../db/conexion.js";



const userSchema = new Schema({
  user:String,
  userFull:String,
  email:String,
  date:Date,
  chats:[]

})

const userModels = model("User",userSchema)

/* const User = new userModels({
  user:"jose",
  userFull:"jose Morocho",
  email:"jose_morocho@gmail.com",
  date:new Date(),
  chats:[]
}) 

User.save()
.then((user)=>console.log(user) )
*/

/* const chat={"friendId":1,"chatId":1}
  
userModels.findByIdAndUpdate("63cb4827bc13f76222dac670",{$push:{chats:chat}})
.then(res=> console.log(res))
.catch(err=> console.log(err))
 */

export default userModels