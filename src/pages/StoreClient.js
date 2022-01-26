import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {React,useEffect,useState} from 'react'
import { Footer } from '../components/Footer'
import Slider from '@mui/material/Slider';
import MyCard from '../components/Card/Card';
import axios from "axios";

function valuetext(value) {
    return `${value}°C`;
  }

  
const minDistance = 10;

export const StoreClient = () => {
    const [value1, setValue1] = useState([0, 3000]);
    const [products,setProducts] = useState([]);
    const [filteredProduct,setFilteredProduct] = useState([]);
    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
          setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
          setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
       
      };

      useEffect(() => {
        axios.get('/store/products')
        .then((res) => setProducts(res.data))
        .catch(err => console.log(err))
    },[]);
    
    return (
        <div>
            <div style={{marginTop:'20vh', marginBottom:'23%'}}>
                <Grid display="flex">
                    <Box display="flex" alignItems="center" justifyContent="center" direction="column" sx={{bgcolor:"#1E3547" ,height:"15vh", width:"50vh", marginLeft:"5vh",border:"2px solid ", borderRadius:"15px", borderColor:"#1E3547"}}>
                    <Container display="flex" alignItems="center" direction="column">
                        <Typography style={{fontSize:"20px", color:"#fff"}}>Filter by price</Typography>
                        <Slider
                            getAriaLabel={() => 'Minimum distance'}
                            value={value1}
                            onChange={handleChange1}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            disableSwap
                            max={1000}
                            min={0}
                        />
                        <Typography style={{color:"#fff"}}>Price: {value1[0]} - {value1[1]} €</Typography>
                    </Container>
                    </Box>
                    <Container>
                    <Grid container spacing={4}>
                      {products.filter((product) => product.price >= value1[0] && product.price<= value1[1]).map((product) => (
                        
                        <Grid item xs={12} sm={6} md={4}>
                            <MyCard id={product.id} name = {product.name} type={product.coffee_type} price={product.price} country_origin={product.country_origin} image={product.image}/>
                        </Grid>
                      ))}
                      
                    </Grid>
                    </Container>
                    

                </Grid>
            </div>
        </div>
    );
}
export default StoreClient;