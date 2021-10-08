import React,{useState} from 'react'
import {Button} from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const commonStyles = {
    bgcolor: '#EAE7DE',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
  };

export const Home = () => {
    return(
        <div style={{
            height:'2300px',
            backgroundColor:'#fff'
        }}>
    


    <Container style={{
    }}>

    <Box
      sx={{
        
        width: '100%',
        height: 500,
        bgcolor: '#EAE7DE',
        paddingTop:'70px',
        paddingBottom:'17px',
        position:'absolute',
        left:0
        
      }}
    >
        <img 
            src ='https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            style={{
                
                width:'40%',
                height:'100%',
                marginLeft:'16%'
            }}
        >
        </img>

        <Typography variant='h6' style={{
                        flexGrow:1,
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



        
    </Box>

    </Container>

    <Box
      sx={{
        
        backgroundColor:'#fff',
        position:'relative',
        height:'500px',
        width:'100%',
        top:'590px',
        left:0
        
      }}
    >

        <img 
            src ='https://images.unsplash.com/photo-1607681034540-2c46cc71896d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvZmZlZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
            style={{
                
                marginLeft:'58%',
                marginTop:'0.7%',
                width:'800px',
                height:'500px'
            }}
        >
        </img>

        <Typography variant='h6' style={{
                        flexGrow:1,
                        position:'absolute',
                        left:'4%',
                        top:160,
                        paddingBottom:'',
                        paddingLeft:'6px',
                        fontFamily:'"Blacksword"',
                        fontSize:30,
                        width:'50%'
                        }}>
                    We love coffee. Seeing as you’re here, most likely you do too. The rich, irresistible aroma; the tempting way the crema swirls like molten lava on an espresso- not to mention the caffeine kick. Across all timezones, it’s the preferred way of starting the day.
                    <br/>
                    
        </Typography>


        <Box sx={{

        backgroundColor:'#d6c9ab',
        position:'relative',
        height:'500px',
        width:'60.44%',
        marginTop:'0.7%',
        right:'0',
        marginLeft:'40%',
        }}>

        <Typography variant='h6' style={{
                        flexGrow:1,
                        position:'absolute',
                        left:'20%',
                        top:120,
                        paddingBottom:'',
                        paddingLeft:'6px',
                        fontFamily:'"Blacksword"',
                        fontSize:23,
                        width:'60%'
                        }}>
                    How often do you drink coffee?
                    <br/>
                    Have you ever stopped to think about the many different types of coffee beans or where they come from? The chances are probably not that often!
                    <br/>
                    If you are a self-confessed coffee lover, to really appreciate your coffee we invite you to learn more about the main coffee bean types that are currently found on the market.
                    The four main coffee types are Arabica, Robusta, Excelsa, and Liberica and all four of them have radically different taste profiles..
                    
                    
        </Typography> 

        </Box>


        
        <img 
            src ='https://images.unsplash.com/photo-1510586909270-7b3ba37fd565?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGNvZmZlZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            style={{
                
                position:'absolute',
                marginLeft:'-1%',
                marginTop:'-26.5%',
                width:'800px',
                height:'500px'
            }}
        >
        </img>



        
    </Box>

    <Box
        sx={{

            backgroundColor:'#EAE7DE',
            position:'relative',
            height:'375px',
            width:'45%',
            top:'1120px',
            marginLeft:'-0.5%'
            
        }}>

    </Box>


    <img 
            src ='https://images.unsplash.com/photo-1447753072467-2f56032d1d48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMGJlYW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            style={{
                
                position:'relative',
                marginLeft:'44.5%',
                top:'745px'
    
            }}
        >
    </img>
    <Box
        sx={{
            backgroundColor:'#EAE7DE',
            position:'relative',
            height:'375px',
            width:'33.6%',
            top:'366px',
            marginLeft:'66.80%'
        }}>

    </Box>

    <AppBar position="absolute"  style={{

        marginTop:'2000px',
        backgroundColor:"#1E3547",
        height:'400px'
    }}>
            <Toolbar>
              <Typography variant="body1" color="inherit" style={{
                  marginTop:'5%',
                  marginLeft:'5%',
              }}>
                Email: www.coffeclubhouse@gmail.com
              </Typography>
            </Toolbar>

            <Toolbar>
              <Typography variant="body1" color="inherit" style={{
                  marginLeft:'5%',
              }}>
                Phone: 0711432459
              </Typography>
            </Toolbar>

            <FacebookIcon style={{marginLeft:'40%',}}>

            </FacebookIcon>

            <InstagramIcon style={{marginLeft:'50%',marginTop:'-1.18%'}}>

            </InstagramIcon>

            <TwitterIcon style={{marginLeft:'60%',marginTop:'-1.18%'}}>

            </TwitterIcon>


            <Toolbar>
              <Typography variant="body1" color="inherit" style={{
                  marginLeft:'33%',
                  marginTop:'4%'
              }}>
                © COPYRIGHT 2020-2022 COFFEE CLUBHOUSE | POLICY ON PERSONAL DATA | COOKIE POLICY
              </Typography>
            </Toolbar>
        </AppBar>

    
        
    </div>

    
        
    );
}

export default Home;



