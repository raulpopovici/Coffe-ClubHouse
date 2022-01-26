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
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
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

export const ShoppingCartCard = (props) => {


  const [isModified,setIsModified] = useState(false);

  const handleDeleteProduct = async (id) => {
    axios.delete(`/deleteCartProduct/${id}`)
    .then((res) => setIsModified(!isModified))
    .catch(err => console.log(err)) 
}

  

  return (
    <Card sx={{ minWidth: 100}}>
      <CardMedia
        component="img"
        height="200"
        image={props.image}
      >

        {/* <Button>delete</Button> */}
      </CardMedia>
      <CardContent>
        <Grid container display="flex" justifyContent="center" flexDirection="column" alignItems="center">
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Chip icon={<EuroIcon />} label={props.price} variant="outlined" sx={{marginTop:"5px",marginBottom:"5px"}}/>
          <Chip icon={<CoffeeIcon/>} label= {props.type} variant="outlined" sx={{marginTop:"5px",marginBottom:"5px"}}/>
          <Chip icon={<LocationOnIcon/>} label= {props.country_origin} variant="outlined" sx={{marginTop:"5px",marginBottom:"5px"}}/>
          <Button onClick = {() => {handleDeleteProduct(props.id);props.onClick()}} sx={{diplay:"flex",alignSelf:"flex-end"}}><CloseSharpIcon sx={{color:"#000"}}/></Button>
        </Grid>
       
      </CardContent>
    </Card>
  );
}

export default ShoppingCartCard;