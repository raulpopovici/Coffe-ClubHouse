import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Footer } from '../components/Footer'
import Slider from '@mui/material/Slider';
import MyCard from '../components/Card/Card';


function valuetext(value) {
    return `${value}°C`;
  }

  
const minDistance = 10;

export const StoreClient = () => {
    const [value1, setValue1] = React.useState([20, 37]);
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
    return (
        <div>
            <div style={{marginTop:'20vh'}}>
                <Grid display="flex">
                    <Box display="flex" alignItems="center" justifyContent="center" direction="column" sx={{bgcolor:"#D6C9AB" ,height:"20vh", width:"50vh", marginLeft:"5vh",border:"2px solid ", borderRadius:"15px", borderColor:"#D6C9AB"}}>
                    <Container display="flex" alignItems="center" direction="column">
                        <Typography style={{fontSize:"20px"}}>Filter by price</Typography>
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
                        <Typography>Price: {value1[0]} - {value1[1]} €</Typography>
                    </Container>
                    </Box>
                    <Container>
                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid><Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <MyCard/>
                      </Grid>
                      
                    </Grid>
                    </Container>
                    

                </Grid>
            </div>
        </div>
    );
}
export default StoreClient;