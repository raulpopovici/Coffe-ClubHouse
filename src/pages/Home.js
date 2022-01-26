import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'react'
import Box from '@mui/material/Box';
import { Typography,Grid} from '@mui/material';
import Container from '@mui/material/Container';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Footer from '../components/Footer';
import axios from 'axios';

const commonStyles = {
    bgcolor: '#EAE7DE',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
  };

export const Home = () => {

    
    const history = useHistory();
   
    return(
    
    <div style={{height:'2900px',backgroundColor:'#fff'}}>
        <Grid>
            <Grid>
                <Box display="flex" justifyContent="space-around"  sx={{width: '100%',height:'704px',bgcolor: '#EAE7DE'}}>
                       <div>
                            <img 
                                src ='https://i.pinimg.com/564x/61/8b/52/618b52774e45453cd75dc84945ddd468.jpg'
                                style={{height:"600px",marginLeft:"16%", marginTop:"80px",marginBottom:"30px"}}>
                            </img>
                        </div>
                        <div>
                                    <Typography variant='h6' style={{
                                                    position:'absolute',
                                                    right:'10%',
                                                    top:300,
                                                    paddingBottom:'',
                                                    paddingLeft:'130px',
                                                    fontFamily:'"Apple Color Emoji"',
                                                    fontSize:30
                                                    }}>
                                                “Coffee, the favorite drink of the civilized world.”
                                                <br/>
                                    </Typography>
                                    <Typography variant='h6' style={{
                                                    flexGrow:1,
                                                    position:'absolute',
                                                    right:'20%',
                                                    top:350,
                                                    paddingBottom:'',
                                                    paddingLeft:'130px',
                                                    fontFamily:'"Apple Color Emoji"',
                                                    fontSize:30
                                                    }}>
                                                -Thomas Jefferson
                                    </Typography>
                        </div>    
                </Box>
            </Grid>

            <Grid>
                <Box display="flex" justifyContent="space-around"  sx={{width: '100%',height:'704px',bgcolor: '#1d4245'}}>
                       <Grid display="flex" justifyContent="flex-start" alignItems="center">
                                <Typography variant='h6' style={{
                                                paddingLeft:'6px',
                                                fontFamily:'"Blacksword"',
                                                fontSize:30,
                                                width:'50%',
                                                color:"#eae7de",
                                                marginLeft:"20px"
                                                }}>
                                            We love coffee. Seeing as you’re here, most likely you do too. The rich, irresistible aroma; the tempting way the crema swirls like molten lava on an espresso- not to mention the caffeine kick. Across all timezones, it’s the preferred way of starting the day.
                                            <br/>
                                            
                                </Typography>
                                
                                <img src ='https://i.pinimg.com/564x/cc/bd/37/ccbd371e49e6b811529e91d64dc49067.jpg'
                                            style={{height:"650px",marginLeft:"200px", marginTop:"30px",marginBottom:"30px"}}/>
                        </Grid>    
                </Box>
            </Grid>
            <Grid>
                <Grid display="flex" justifyContent="center" sx={{bgcolor: '#2a2b2e'}}>
                            <img src ='https://i.pinimg.com/564x/c5/af/41/c5af416b8496f2c05c9d510c5672bd10.jpg' style={{marginTop:"30px",marginBottom:"30px"}}/>
                            <img src ='https://i.pinimg.com/564x/20/38/40/2038407a1c8b970114ba38cdc9bae31f.jpg' style={{marginTop:"30px",marginBottom:"30px"}}/>
                            <img src ='https://i.pinimg.com/564x/da/bf/9c/dabf9c54511ecfcc2165803f642f45f3.jpg' style={{marginTop:"30px",marginBottom:"30px"}}/>    
                </Grid>
            </Grid>

            <Grid>

                <Box display="flex" justifyContent="space-around" alignItems="center" sx={{width: '100%',height:'704px',bgcolor: '#d6c9ab'}}>

                            <Typography variant='h6' style={{
                                 paddingLeft:'6px',
                                 fontFamily:'"Blacksword"',
                                 fontSize:30,
                                 width:'50%',
                                 color:"#2A2B2E",
                                 marginLeft:"20px"
                                }}>
                                How often do you drink coffee?
                                <br/>
                                Have you ever stopped to think about the many different types of coffee beans or where they come from? The chances are probably not that often!
                                </Typography> 
                                <img src ='https://images.unsplash.com/photo-1447753072467-2f56032d1d48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMGJlYW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>

                                <Typography variant='h6' style={{
                                 paddingLeft:'6px',
                                 fontFamily:'"Blacksword"',
                                 fontSize:30,
                                 width:'50%',
                                 color:"#2A2B2E",
                                 marginLeft:"20px"
                                }}>
                                If you are a self-confessed coffee lover, to really appreciate your coffee we invite you to learn more about the main coffee bean types that are currently found on the market.
                                The four main coffee types are Arabica, Robusta, Excelsa, and Liberica and all four of them have radically different taste profiles..
                                </Typography> 
                </Box>
            </Grid>
            
        </Grid>


    </div>

    );
}

export default Home;



