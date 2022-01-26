import {Grid,Paper,Typography,TextField,Button,Box,Link} from '@mui/material'
import Modal from '@mui/material/Modal';
import React, {useState} from 'react'
import axios from "axios";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import EuroIcon from '@mui/icons-material/Euro';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#1E3547',
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width:'50vh'
};

const styleTextField = {
    root: {
        background: "#000"
    },
    input:{
        color: "white"
    }
};

const Input = styled('input')({
  display: 'none',
});

export default function PlaceOrderModal(props) {


   
    const [checkBoxValue,setCheckBoxValue] = useState(false);
    const [closeModal,setCloseModal] = useState(false);
    let sum = 0;
    for(let i=0;i<props.data.length;i++){
        sum = sum + props.data[i].price;
    }
    
    // const handleBuyClick = () => {
    //   props.onClose();
    // }


  return (
    <div>
      <Modal
        open={props.isModalOpen}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" color="#fff" component="h2">
            Your Order
          </Typography>
          
          <Typography variant="h6" color="#fff" component="h2" sx={{marginTop:"10px"}}>
            You have {props.data.length} products
          </Typography>

          <Typography variant="h6" color="#fff" component="h2">
            Your total is : {sum} €
          </Typography>


          <Grid>
              <FormGroup>
                <FormControlLabel control={<Checkbox sx={{color:"#fff"}} onChange={(e) => setCheckBoxValue(e.target.checked)}/>} label="Are you sure you want to buy?" sx={{color:"#fff"}}/>
              </FormGroup>
          </Grid>
            <Button variant="contained" onClick = {props.onBuyClick} disabled={!checkBoxValue} style={{backgroundColor:'#EAE7DE',width:'150px',height:'50px', marginTop:"20px",color:"#000"}}>
                  BUY
            </Button>
        </Box>
      </Modal>
    </div>
  );
}