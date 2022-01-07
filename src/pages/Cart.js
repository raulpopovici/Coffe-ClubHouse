import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import {SearchBar} from '../components/Searchbar/searchbar'

export const Cart =() => {
    return (
  
        <div style={{marginTop:'20vh'}}>
            <Grid>
                <Grid container justifyContent="center">
                    <Typography style={{fontSize:"30px", color:"#000",marginBottom:"30px"}}>All your favorite coffee is now here</Typography>
                    <SearchBar/>
                </Grid>
            </Grid>
            
            
        </div>
      
    );
  }
  
  export default Cart;