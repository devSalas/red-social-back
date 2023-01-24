import * as dotevn from "dotenv"
import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from '../db/conexion.js';
import router  from '../routes/rutas.js'
import { Server as SocketServer  } from "socket.io"; 
import chatController from '../controller/chatController.js';
/* usar las importaciones para usar con socket i.o */

/* db mongo*/
dotevn.config({path:"./.env"})

const app = express();

const server =  http.createServer (app);

const io = new  SocketServer(server,{
   cors:{
      origin: '*'
    }
  })




io.on('connection',(socket)=>{

  console.log('user connected'+socket.id)

  socket.on("datos",(datos)=>{

    chatController.addNewDataChat(datos)


  socket.broadcast.emit('message',{
  body:datos.newDataChat.body,
  userId:datos.newDataChat.userId })

  })
})


connectDB()

  app.use(express.json())
  app.use(cors());
  app.use(morgan("dev"))

  app.use("/",router)

  

  server.listen(process.env.PORT,console.log("server up in http://localhost:"+process.env.PORT))












