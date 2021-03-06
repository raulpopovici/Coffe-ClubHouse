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
import Chip from '@mui/material/Chip';
import EuroIcon from '@mui/icons-material/Euro';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
          console.log(fk_user_id);
          console.log(fk_product_id);
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
        height="200"
        image={props.image}
      />
      <CardContent>
        <Grid container display="flex" justifyContent="center" flexDirection="column" alignItems="center">
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Chip icon={<EuroIcon />} label={props.price} variant="outlined" sx={{marginTop:"5px",marginBottom:"5px"}}/>
          <Chip icon={<CoffeeIcon/>} label= {props.type} variant="outlined" sx={{marginTop:"5px",marginBottom:"5px"}}/>
          <Chip icon={<LocationOnIcon/>} label= {props.country_origin} variant="outlined" sx={{marginTop:"5px",marginBottom:"5px"}}/>
        </Grid>
       
      </CardContent>
      {
        user ? <CardActions ><Grid container display="flex" justifyContent="center"><Button onClick={addToCart} size="small" sx={{border:"1px solid",borderRadius:"15px", borderColor:"#616161",color:"#000"}}>Add to cart</Button></Grid></CardActions> : null
      }
     
    </Card>
  );
}

export default MyCard;