import { Box , styled} from "@mui/material";
import Footer from "./Footer";
import { useContext ,useState,useEffect} from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";
import Message from "./Message";
const Wrapper=styled(Box)`
    background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size:50%;
`;
const Component=styled(Box)`
height:77vh;
overflow-y:scroll;
`;
const Container=styled(Box)`
padding:2px 80px;
`;
const Messages=({person,conversation})=>{
    const {account}=useContext(AccountContext);
    const [messages,setMessages]=useState([]);

    const [value,setValue]=useState('');
    const [newMessageFlag,setNewMessageFlag]=useState(false);
    const [file,setFile]=useState();
    const [image,setImage]=useState('');
    useEffect(()=>{
        const getMessageDetails=async()=>{
            let data=await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    },[person.sub,conversation._id,newMessageFlag]);
    const sendText =async(e) =>{
        //console.log(e);
        const code=e.keyCode || e.which;
        if(code ===13){
            let message={};
            if(!file){
                message={
                    senderId:account.sub,
                    reciverId:person.sub,
                    conversationId:conversation._id,
                    type:'text',
                    text: value
                }
            }
            else{
                message={
                    senderId:account.sub,
                    reciverId:person.sub,
                    conversationId:conversation._id,
                    type:'file',
                    text: image
                }
            }
            await newMessage(message);
            setValue('');
            setImage('');
            setFile('');
            setNewMessageFlag(prev=>!prev);
        }
    }
    // useEffect(()=>{
    //     const getMessageDetails=async()=>{
    //         let data=await getMessages(conversation._id);
    //         setMessages(data);
    //     }
    //     conversation._id && getMessageDetails();
    // },[person.sub,conversation._id,sendText]);
    return (
        <>
        <Wrapper>
            <Component>
                {
                    messages && messages.map(message=>(
                        <Container>
                            <Message message={message}/>
                        </Container>
                        
                    ))
                }
            </Component>
            
        </Wrapper>
        <Footer
            sendText={sendText}
            setValue={setValue}
            value={value}
            file={file}
            setFile={setFile}
            setImage={setImage}
        />
        </>
    )
};
export default Messages;