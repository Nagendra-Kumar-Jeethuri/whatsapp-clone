import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();//Initialization
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const Connection=async()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-l4qwqyc-shard-00-00.zewwxdt.mongodb.net:27017,ac-l4qwqyc-shard-00-01.zewwxdt.mongodb.net:27017,ac-l4qwqyc-shard-00-02.zewwxdt.mongodb.net:27017/?ssl=true&replicaSet=atlas-11hln0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log("Connected successfully");
    }catch(error){
        console.log("error in connecting the database",error.message);
    }
}
export default Connection;