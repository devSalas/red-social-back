import friendServices from "../services/friendServices.js";

async function getFriend(req,res) {

  const {friendId} = req.body
  console.log(6,friendId)
  const friend =await friendServices.getFriend(friendId)
  res.send(friend);

}

const friendControllers ={
getFriend 
}
export default friendControllers  