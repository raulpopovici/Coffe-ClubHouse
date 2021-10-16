import React,{useState} from 'react'
import Container from '@mui/material/Container'
import {Grid,Paper,Typography,TextField,Button,Box,Link} from '@mui/material'
import { makeStyles } from '@mui/styles';
import Footer from '../components/Footer';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '50px',
      
  
    },
  }));



  


export const Login = () => {

    const classes = useStyles();
    return(
        <div>
            <Container >

                <Grid container justifyContent='center'>

                        <Paper elevation={10} style={{marginTop:'13%',height:'500px',width:'500px'}}>

                            <Grid container justifyContent='center' direction='column' alignItems='center'>

                                <Typography style={{marginTop:'20px',fontSize:'20px'}}>
                                    Welcome back!
                                </Typography>
                            </Grid>

                            <form className={classes.root}>
                                    <TextField 
                                        id="outlined-basic"
                                        variant="outlined"
                                        required
                                        label="Username"
                                        style={{width:'60%'}}/>

                                    <TextField 
                                        id="outlined-basic"
                                        variant="outlined"
                                        required
                                        label="Password" 
                                        type="password"
                                        style={{width:'60%',marginTop:'5%'}}/>
                            </form>

                            <Grid container justifyContent='center' alignItems='center' direction='column' style={{marginTop:'10%'}}>

                                <Button variant="contained" style={{backgroundColor:'#1E3547',width:'100px',height:'50px'}}>
                                    Log In
                                </Button>

                                <Grid container justifyContent='center' alignItems='center' direction='row' style={{marginTop:'5%'}}>
                                    Don't have an account?<Button href='/register'> Register Here</Button>
                                </Grid>
                                   
                            </Grid>
                            
                        </Paper>
                        
                </Grid>
                
            </Container>

            <Footer/>

            
        </div>
    );
}

export default Login;