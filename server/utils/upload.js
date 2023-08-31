import { configDotenv } from 'dotenv';
import multer from 'multer';
import {GridFsStorage} from "multer-gridfs-storage";
import dotenv from 'dotenv';
dotenv.config();//Initialization
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const storage=new GridFsStorage({
    url:`mongodb://${USERNAME}:${PASSWORD}@ac-l4qwqyc-shard-00-00.zewwxdt.mongodb.net:27017,ac-l4qwqyc-shard-00-01.zewwxdt.mongodb.net:27017,ac-l4qwqyc-shard-00-02.zewwxdt.mongodb.net:27017/?ssl=true&replicaSet=atlas-11hln0-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options:{useUnifiedTopology:true,useNewUrlParser:true},
    file:(request,file)=>{
        const match=["image/png","image.png","image/jpg","image.jpg"];
        if(match.indexOf(file.mimeType)==-1){
            return `${Date.now()}-file-${file.originalname}`;
        }
        return {
            bucketName:"Photos",
            fileName:`${Date.now()}-file-${file.originalname}`,
        }
    }
    //callbackfunction
});
export default multer({storage});