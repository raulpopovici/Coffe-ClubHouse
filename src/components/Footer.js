import { Container,Grid,Box, AppBar ,Toolbar,Typography} from "@mui/material";
import '../CSS/login.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer =()=>{

    return (

        <div >
            
            <Box style={{width:'100%',height:'200px',backgroundColor:'#1E3547',marginTop:'5%'}}>

                <Grid container direction='column'>
                    <Grid container justifyContent='center' alignItems='center'>
                        <Toolbar>
                            <Typography variant="body1" color="#fff" style={{
                                // marginTop:'5%',
                                // marginLeft:'5%',
                            }}>
                            Email: www.coffeclubhouse@gmail.com
                            </Typography>
                        </Toolbar>

                        <Toolbar>
                            <Typography variant="body1" color="#fff" style={{
                                
                            }}>
                                Phone: 0711432459
                            </Typography>
                        </Toolbar>
                    </Grid>


                    <Grid container justifyContent='space-evenly' alignItems="center" style={{marginTop:'2%'}}>

                        <FacebookIcon style={{color:'#fff'}}/>
                        <InstagramIcon style={{color:'#fff'}}/>
                        <TwitterIcon style={{color:'#fff'}}/>
                        
                    </Grid>

                    <Grid container justifyContent='space-evenly' alignItems="center" >

                        <Toolbar>
                            <Typography color="#fff" >
                                © COPYRIGHT 2020-2022 COFFEE CLUBHOUSE | POLICY ON PERSONAL DATA | COOKIE POLICY
                            </Typography>
                        </Toolbar>
                    </Grid>

                </Grid>



            </Box>
                
            
        

        </div>

    );
}

export default Footer;