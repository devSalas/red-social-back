import {connect} from 'mongoose'

export const connectDB = async ()=>{
  try{
    const url = process.env.urlBD /* || "mongodb+srv://esteban:9mka6pw0IpMUW8hN@cluster0.sg2d9.mongodb.net/red-social?retryWrites=true&w=majority" */
    console.log(url)
    await connect(url)
    
  }catch(err){
    console.log(err)
  }
  
}

export default connectDB;


