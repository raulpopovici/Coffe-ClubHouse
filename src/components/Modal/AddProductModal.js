import {Grid,Paper,Typography,TextField,Button,Box,Link} from '@mui/material'
import Modal from '@mui/material/Modal';
import React, {useState} from 'react'
import axios from "axios";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

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

export default function BasicModal(props) {
  
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [coffee_type,setCoffeeType] = useState("");
    const [country_origin,setCountryOrigin] = useState("");
    const image = "image";

    const handleAddProduct = async(e) => {
        e.preventDefault();
        try{

            const res = await axios.post('/store',{name,price,coffee_type,country_origin,image});
            if(res.data){
                    //console.log("its oke");
                }
        }catch{
            console.log("not oke");
        }
    }


  return (
    <div>
      <Modal
        open={props.isModalOpen}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" color="#fff" component="h2">
            Add a new Product
          </Typography>
          <form>
         <Typography id="modal-modal-title" color="#fff" component="h2">
            Name:
          </Typography>  
          <TextField 
            sx={styleTextField}
            id="outlined-basic"
            variant="outlined"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}                         
         />
         <Typography id="modal-modal-title" color="#fff" component="h2">
            Price:
          </Typography>  
          <TextField 
            sx={styleTextField}
            id="outlined-basic"
            variant="outlined"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}                           
         />
         <Typography id="modal-modal-title" color="#fff" component="h2">
            Type of Coffee:
          </Typography>  
          <TextField 
            sx={styleTextField}
            id="outlined-basic"
            variant="outlined"
            required
            value={coffee_type}
            onChange={(e) => setCoffeeType(e.target.value)}                           
         />
          <Typography id="modal-modal-title" color="#fff" component="h2">
            Country of origin:
          </Typography>  
          <TextField 
            sx={styleTextField}
            id="outlined-basic"
            variant="outlined"
            required
            value={country_origin}
            onChange={(e) => setCountryOrigin(e.target.value)}                           
         />
          </form>

        <Grid display= "flex" direction="column" alignItems="center" marginTop="20px">
        <label htmlFor="icon-button-file">
        {/* <Input accept="image/*" id="icon-button-file" type="file" /> */}
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>

            <Button variant="contained"  onClick={handleAddProduct} style={{backgroundColor:'#EAE7DE',width:'150px',height:'50px', marginTop:"20px",color:"#000"}}>
                  Add Product
            </Button>
        </Grid>
        
        </Box>
      </Modal>
    </div>
  );
}