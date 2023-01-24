import userModels from "../Models/user.js";


function getFriend(friendId) {
  console.log({friendId,n:5})
  return  userModels.findById(friendId)  
}


 const friendServices={
getFriend
}

export default  friendServices