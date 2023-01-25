import { Router } from "express";
import { get } from "mongoose";
import chatController from "../controller/chatController.js";
import friendControlloer from "../controller/friendControlloer.js";
import userController from "../controller/userController.js";

const router = Router()


  router

  .get("/",(req,res)=>{res.send("hola")})
  .get("/test",(req,res)=>{res.send({statusServer:true})})
  
  .post("/user",userController.getUser)

  .post("/getOneFriend",friendControlloer.getFriend)
 
  .post("/chat",chatController.getChat)

  .post("/newDataChat",chatController.addNewDataChat)

  .delete("/messageChat/:id",chatController.deleteMessageChat)

export default router