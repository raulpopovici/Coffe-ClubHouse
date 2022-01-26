import React,{useState,useEffect, useContext} from 'react'
import Container from '@mui/material/Container'
import {Grid,Paper,Typography,TextField,Button,Box,Link} from '@mui/material'
import { makeStyles } from '@mui/styles';
import Footer from '../components/Footer';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/auth'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


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

    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successopen,setsuccessOpen] = useState(false);
    const [erroropen,seterrorOpen] = useState(false);
    const [backdropOpen,setbackdropOpen] = useState(false);
    const {user,setUser} = useContext(AuthContext);

    useEffect(()=> {
        if(successopen == true){
            const timeId = setTimeout(() => {
                setbackdropOpen(true);
            },1000)
        }

        if(backdropOpen == true){
            const timeId = setTimeout(() => {
                history.push('/');
            },1000)
            
        }
    });


    const handleLogin = async(e) => {
        e.preventDefault();
    
        try{
            const res = await axios.post('/login',{username,password});
            if(res.data){
                setsuccessOpen(true);
            }
            setUser(res.data);
            localStorage.setItem('user',JSON.stringify(res.data));
        }catch{
            seterrorOpen(true);
        }
    }

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    const { vertical, horizontal} = state;

    const handleClose = () => {
        setsuccessOpen(false);
    }

    const handleCloseError = () => {
        seterrorOpen(false);
    }

    const handleBackdropClose = () => {
        setbackdropOpen(false);
    }

    const classes = useStyles();


    return(
        <div>
            <Container sx={{marginBottom:"8%"}}>

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
                                        onChange={(e) => setUsername(e.target.value)}
                                        style={{width:'60%'}}/>

                                    <TextField 
                                        id="outlined-basic"
                                        variant="outlined"
                                        required
                                        label="Password" 
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{width:'60%',marginTop:'5%'}}/>
                            </form>

                            <Grid container justifyContent='center' alignItems='center' direction='column' style={{marginTop:'10%'}}>

                                <Button variant="contained" onClick={handleLogin} style={{backgroundColor:'#1E3547',width:'100px',height:'50px'}}>
                                    Log In
                                </Button>

                                <Grid container justifyContent='center' alignItems='center' direction='row' style={{marginTop:'5%'}}>
                                    Don't have an account?<Button href='/register'> Register Here</Button>
                                </Grid>

                                <Snackbar open={successopen} onClose={handleClose} autoHideDuration={4000} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                                    <Alert severity="success" sx={{ width: '100%' }}>
                                    Login succesfull!
                                    </Alert>
                                </Snackbar>

                                <Snackbar open={erroropen} onClose={handleCloseError} autoHideDuration={4000} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                                    <Alert severity="error" sx={{ width: '100%' }}>
                                    Invalid credentials!
                                    </Alert>
                                </Snackbar>
                                <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={backdropOpen}
                                onClick={handleBackdropClose}
                                
                                >
                                 <CircularProgress color="inherit" />
                               </Backdrop>   
                            </Grid>
                            
                        </Paper>
                        
                </Grid>
                
            </Container>

            {/* <Footer/> */}

            
        </div>
    );
}

export default Login;