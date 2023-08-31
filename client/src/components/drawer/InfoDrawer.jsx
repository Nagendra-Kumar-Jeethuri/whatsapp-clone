import { ArrowBack} from "@mui/icons-material";
import { Typography,styled } from "@mui/material";
import { Drawer , Box} from "@mui/material";
import Profile from "./Profile";
const drawerStyle={
    left:20,
    top:15,
    height:'95%',
    width:'450px',
    boxShadow:'none'
}
const Header=styled(Box)`
    background:darkgreen;
    height:53px;
    display:flex;
    align-items:center;
    color:white;
    &>svg , &>p{
        padding-left:10px;
        font-weight:600;
    }
`
const Component=styled(Box)`
    background:#ededed;
    height:91%;
`
const InfoDrawer=({open,setOpen})=>{
    const handleClose=()=>{
        setOpen(false);
    }
    return(
        <Drawer
          open={open}
          onClose={handleClose}
          PaperProps={{sx:drawerStyle}}
          style={{zIndex:1500}}
          hideBackdrop={true}
        >
            <Header>
                <ArrowBack onClick={handleClose}/>
                <Typography style={{paddingLeft:'20px'}}>Profile</Typography>
            </Header>
            <Component>
                <Profile/>
            </Component>
        </Drawer>
    )
};
export default InfoDrawer;