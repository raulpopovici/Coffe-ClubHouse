import React,{ useState, useEffect, useContext} from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import {SearchBar} from '../components/Searchbar/searchbar'
import axios from "axios";
import AuthContext from '../context/auth';
import ShoppingCartCard from '../components/Card/ShoppingCartCard';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import PlaceOrderModal from '../components/Modal/PlaceOrderModal'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



export const Cart =() => {

    const [cartProducts,setCartProducts] = useState([]);
    
    const [isModified,setIsModified] = useState(false);
    const [open, setOpen] = useState(false);
    const [buyButtonClicked,setBuyButtonClicked] = useState(false);
    const handleOpen = () => {setOpen(true)};
    const [bigSum,setBigSum] = useState(0);
    const [successopen,setsuccessOpen] = useState(false);
    const handleClose = () => {setOpen(false)};
    const [erroropen,seterrorOpen] = useState(false);

    const handleBuyButton = () => {

        if(cartProducts.length > 0){
            setOpen(false);setsuccessOpen(true);
            axios.delete("/deleteAllCartProducts")
            .then((res) => setIsModified(!isModified))
            .catch(err => console.log(err))
        }
        else{
            setOpen(false);seterrorOpen(true);
        }
        
    }

    

    const handleCloseAlert = () => {setsuccessOpen(false)};
    const handleCloseError = () => {
        seterrorOpen(false);
    }
    

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    const { vertical, horizontal} = state;

    let sum;
    
    useEffect(() => {

        let foundUser;
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
         foundUser = JSON.parse(loggedInUser);
        }
        axios.get(`/shoppingCartGetContent/${foundUser.user_id}`)
        .then((res) => setCartProducts(res.data))
        .catch(err => console.log(err))
        
    },[isModified]);


    const setM = () => {
        setIsModified(!isModified)
    }
    return (
  
        <div style={{marginTop:'20vh',marginBottom:'40vh'}}>
            <Grid>
                <Grid container justifyContent="center">
                    <Typography style={{fontSize:"30px", color:"#000",marginBottom:"30px"}}>All your favorites are now here</Typography>
                    {/* <SearchBar/> */}
                </Grid>

                <Container>
                    <Grid container spacing={4}>
                      {cartProducts.map((product) => (
                        
                        <Grid item xs={12} sm={6} md={4}>
                            <ShoppingCartCard 
                                id={product.shoppingcart_id}
                                name = {product.name} 
                                type={product.coffee_type} 
                                price={product.price} 
                                country_origin={product.country_origin}
                                image={product.image}
                                onClick={() => {setM()}}
                                />
                        </Grid>

                      ))}
                    </Grid>
                    </Container>

                    <Container>
                        <Grid container display="flex" justifyContent="center" style={{marginTop:"10%"}}>
                            <Box  display="flex" justifyContent="center">
                                <Button onClick={handleOpen} size="large" variant="contained" sx={{borderRadius:"15px",color:"#fff",bgcolor:"#1E3547"}}>Place Order</Button>
                            </Box>
                        </Grid>
                    </Container>
            </Grid>

            <PlaceOrderModal isModalOpen={open} onClose={handleClose} data={cartProducts} onBuyClick={handleBuyButton}/>

            <Snackbar open={successopen} onClose={handleCloseAlert} autoHideDuration={2000} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        The order has been sent!
                    </Alert>
            </Snackbar>
            
            <Snackbar open={erroropen} onClose={handleCloseError} autoHideDuration={2000} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
                    <Alert severity="info" sx={{ width: '100%' }}>
                        Please add some products to your cart first!!!
                    </Alert>
            </Snackbar>
            
            
        </div>
      
    );
  }
  
  export default Cart;