import {connect} from 'mongoose'
import * as dotevn from "dotenv"

dotevn.config({path:"./.env"})

export const connectDB = async ()=>{
  try{
    console.log(process.env.urlBD,8)
    const url = process.env.urlBD
    await connect(url)
    
  }catch(err){
    console.log(err)
  }
  
}

export default connectDB;


