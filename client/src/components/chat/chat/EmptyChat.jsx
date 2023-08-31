import { Box , styled, Typography,Divider} from "@mui/material";
import { emptyChatImage } from "../../../constants/data";
const Component=styled(Box)`
    background:#f8f9fa;
    padding:20px 0;
    text-align:center;
    height:88.3vh;
`;
const Container=styled(Box)`
    padding:0 100px;
`;
const Image=styled('img')({
    width:400,
    marginTop:100,
});
const Title=styled(Typography)`
    font-size:32px;
    margin:25px 0 10px 0;
    font-family:inherit;
    font-weight:300;
    color:#415253;
`;
const SubTitle=styled(Typography)`
    font-size:14px;
    color:#667781;
    font-weight:400;
    font-family:inherit;
`;
const StyleDivider=styled(Divider)`
    margin:40px 0;
    opacity:0.4;
`
const EmptyChat=()=>{
    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="whatsapp" />
                <Title>Whatsapp Web</Title>
                <SubTitle>Now send and recieve images without keeping your 
                    phone online
                </SubTitle>
                <SubTitle>Use whatsapp upto 4 linked Devices 
                    and 1 phone at the same time
                </SubTitle>
                <StyleDivider/>
            </Container>
        </Component>
    )
}
export default EmptyChat;