import { Router } from "express";
import chatController from "../controller/chatController.js";
import friendControlloer from "../controller/friendControlloer.js";
import userController from "../controller/userController.js";

const router = Router()


  router

  .get("/",(req,res)=>{res.send("hola")})
  
  .post("/user",userController.getUser)

  .post("/getOneFriend",friendControlloer.getFriend)
 
  .post("/chat",chatController.getChat)

  .post("/newDataChat",chatController.addNewDataChat)

export default router