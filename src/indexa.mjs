import express  from "express";
/* import { Server as SocketServer  } from "socket.io"; */
import http from "http"
import cors from 'cors'
import morgan from "morgan";
/* import router from "./route/rutas.js"; */


/* graphQl */

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';


const app = express();

/* const server =  http.createServer(app);

const io = new SocketServer(server,{
   cors:{
      origin: '*'
    }
  })


io.on('connection',(socket)=>{

  console.log('user connected'+socket.id)

  socket.on("datos",(datos)=>{
    
  socket.broadcast.emit('message',{
  body:message,
  from:socket.id
  })

  })
}) */

/* middlewars */
app.use(express.json())
/* app.use(cors()); */
app.use(morgan("dev"))

/* app.use("/",router) */


/* async function Start(){ */

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
 
  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server),
  );
  

  const PORT = process.env.PORT

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000`);
/* } */

Start()
