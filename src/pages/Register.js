import React,{useState,useEffect} from 'react'
import Container from '@mui/material/Container'
import {Grid,Paper,Typography,TextField,Button,Box,Link} from '@mui/material'
import { makeStyles } from '@mui/styles';
import Footer from '../components/Footer';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress';

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




export const Register = () => {

    const history = useHistory();
    const[username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");    
    const [confirmPassword,setConfirmPassword] = useState("");
    const [successopen,setsuccessOpen] = useState(false);
    const [backdropOpen,setbackdropOpen] = useState(false);
    const [erroropen,seterrorOpen] = useState(false);

    useEffect(()=> {
        if(successopen == true){
            const timeId = setTimeout(() => {
                setbackdropOpen(true);
            },2000)
        }

        if(backdropOpen == true){
            const timeId = setTimeout(() => {
                history.push('/login');;
            },1000)
            
        }
    });

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    const { vertical, horizontal} = state;

    const handleRegister = async (e) => {
        e.preventDefault();
        

        try{

            const res = await axios.post('/register',{username,password,confirmPassword,email});
            if(res.data){
                    // history.push('/login');
                    setsuccessOpen(true);
                }
        }catch{
            seterrorOpen(true);
        }
    } 
    const handleClose = () => {
        setsuccessOpen(false);
    }

    const handleBackdropClose = () => {
        setbackdropOpen(false);
    }

    const handleCloseError = () => {
        seterrorOpen(false);
    }

    const goToLogin = (e) => {
        e.preventDefault();

        history.push("/login");
    }

    const classes = useStyles();
    return(
        <div>
            <Container >

                <Grid container justifyContent='center'>

                        <Paper elevation={10} style={{marginTop:'13%',height:'550px',width:'500px'}}>

                            <Grid container justifyContent='center' direction='column' alignItems='center'>

                                <Typography style={{marginTop:'20px',fontSize:'20px'}}>
                                    SIGN UP
                                </Typography>
                            </Grid>
                            

                            <form className={classes.root}>
                                    <TextField 
                                        id="outlined-basic"
                                        variant="outlined"
                                        required
                                        label="Username"
                                        style={{width:'60%'}}

                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}

                                        />
                                        
                                    <TextField 
                                        id="outlined-basic"
                                        variant="outlined"
                                        required
                                        label="Email" 
                                        type="email"
                                        style={{width:'60%',marginTop:'5%'}}

                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>    

                                    <TextField 
                                        id="outlined-basic"
                                        variant="outlined"
                                        required
                                        label="Password" 
                                        type="password"
                                        style={{width:'60%',marginTop:'5%'}}

                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}/>
                                    <TextField 
                                        id="outlined-basic"
                                        variant="outlined"
                                        required
                                        label="Confirm Password" 
                                        type="password"
                                        style={{width:'60%',marginTop:'5%'}}

                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                                        

                            </form>

                            <Grid container justifyContent='center' alignItems='center' direction='column' style={{marginTop:'10%'}}>

                                <Button variant="contained" onClick={handleRegister} style={{backgroundColor:'#1E3547',width:'100px',height:'50px'}}>
                                    Register
                                </Button>

                                <Snackbar open={successopen} onClose={handleClose} autoHideDuration={4000} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                                    <Alert severity="success" sx={{ width: '100%' }}>
                                    Account created succesfully!!!
                                    </Alert>
                                </Snackbar>

                                <Snackbar open={erroropen} onClose={handleCloseError} autoHideDuration={4000} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                                    <Alert severity="error" sx={{ width: '100%' }}>
                                    Check the information again!!
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

export default Register;