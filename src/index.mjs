import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { typeDefs } from "../graphql/typeDefs.js";
import { resolvers } from "../graphql/resolvers.js";
/* import dotevn from "dotenv" */
import * as dotevn from "dotenv"
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
/* 
    const valores ={
	    newDataChat:{
			body: "vamos a pelotear",
			userId: host._id
		  },
      chatId
    }
    

*/


  socket.broadcast.emit('message',{
  body:datos.newDataChat.body,
  userId:datos.newDataChat.userId })

  })
})


connectDB()
  /* middlewars */
  app.use(express.json())
  app.use(cors());
  app.use(morgan("dev"))

  app.use("/",router)
/*   app.get("/",(req,res) => {}) */

/* const httpServer = http.createServer(app); */

  server.listen(4000,console.log("server up in http://localhost:4000"))


// Set up Apollo Server
const Start =async()=>{
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  
  app.use(
    cors(),
    bodyParser.json()
    );  
    app.use(expressMiddleware(server))
    app.use("*",(req, res) => {res.status(404).send("not found")})

  


  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000`);
}












