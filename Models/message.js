import {Schema,model} from 'mongoose'
import connectDB from '../db/conexion.js'
connectDB()

/* const allMessages =new Schema () */

const ChatSchema = new Schema({
  messages:{
  type:[{
    body:String,
    userId:String,
  }],
  required:true
  }
})

const ChatModels= model("Chat",ChatSchema)


/* const chat =new ChatModels({

  messages:[{body:"hola",userId:"63cb48972fb2fbe7805de2da"},{body:"bien",userId:"63cb4827bc13f76222dac670"}]

})

chat.save()
.then(res=> console.log("bien echo")) */

export default  ChatModels







/* export const allMessages =[
  {
    idMessage:1,
   
  },
  {
    idMessage:2,
    messages:[{body:"sano",user:"esteban"},{body:"q fue tonto",user:"lucas"}]
  }
]  */
