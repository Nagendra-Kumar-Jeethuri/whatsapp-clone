//console.log("user"); req-fe to be res-be to fe
import User from "../model/User.js"
export const addUser=async(request,response)=>{
    //console.log("request");
    // console.log(request.body);
    try{
        let exist=await User.findOne({sub: request.body.sub});
        if(exist){
            response.status(200).json({msg:'User already exist'});
            return;
        }
        const newUser=new User(request.body);
        await newUser.save();
        return response.status(200).json(newUser);
    }catch (error){
        return response.status(500).json(error.message);
    }
}
export const getUsers=async(request,Response)=>{
    try{
        const users=await User.find({});
        return Response.status(200).json(users);
    }catch(error){
        return Response.status(500).json(error.message);
    }
}