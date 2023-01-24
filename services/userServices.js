import userModels from "../Models/user.js"

const getUser = async(id) => {
    const user =await userModels.find({_id:id})
    return user
}

const createAmigo = async(id,body) => {

}



const userServices ={
getUser
}

export default userServices