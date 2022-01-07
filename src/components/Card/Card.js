import { useState, useEffect, useContext} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import AuthContext from '../../context/auth';
import axios from 'axios';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const MyCard = (props) => {
  const {user,setUser} = useContext(AuthContext);

  const addToCart = async (e) =>{
    e.preventDefault();

    try{

        if(user != null){
          const fk_user_id = user.user_id;
          const fk_product_id = props.id;
          const res = await axios.post('/shoppingCart',{fk_user_id,fk_product_id});
        }
        
    }catch{
      console.log("error adding to cart");
    }
  }
  return (
    <Card sx={{ minWidth: 200}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://images.unsplash.com/photo-1542238060-3d3fc9856473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwYnJhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <CardContent>
        <Grid container display="flex" justifyContent="center" flexDirection="column" alignItems="center">
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.price}€
          </Typography>
          <Typography variant="body2" sx={{border:"1px solid",borderRadius:"11px", borderColor:"#1E3547", marginBottom:"5px",textAlign:"center",width:"200px"}}>
            100 % specialty {props.type}
          </Typography>
          <Typography variant="body2" sx={{border:"1px solid",borderRadius:"15px", borderColor:"#1E3547",textAlign:"center",width:"200px"}}>
            {props.country_origin}
          </Typography>
        </Grid>
       
      </CardContent>
      {
        user ? <CardActions ><Grid container display="flex" justifyContent="center"><Button onClick={addToCart} size="small" sx={{border:"1px solid",borderRadius:"15px", borderColor:"#1E3547",color:"#000"}}>Add to cart</Button></Grid></CardActions> : null
      }
     
    </Card>
  );
}

export default MyCard;