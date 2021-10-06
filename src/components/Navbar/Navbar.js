import React from 'react'
//import { Link } from 'react-router-dom';
import {colors,AppBar,Toolbar,IconButton, Typography,Button,Grid,Menu} from '@mui/material'
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    root: {

        backgroundColor:'#000',
        '&:hover':{
            background:'#ffffff',
            
        },

    },
});




const Navbar = () => {


    const [anchorEl,setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick  = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () =>{
        setAnchorEl(null);
    }
    const classes = useStyles();

    return (

       <>
       <AppBar style={{
           backgroundColor:'#716151'
           }} >
           <Toolbar style={{
               justifyContent:'space-between'
           }}>
               
                
                    <Typography variant='h6' style={{
                        flexGrow:1,
                        position:'relative',
                        paddingLeft:'130px',
                        fontFamily:'"Apple Color Emoji"'
                        }}>
                    Coffe ClubHouse
                    
                </Typography>
                {/* <Button variant="text"style={{
                    color:'#fff',
                    marginRight:'40%',
                    
                    }}>
                    Home
               </Button>    */}
               
               <Button  className={classes.root} styles={{
                   color:'#000'
               }} >
                   Home

               </Button>
        
              <Avatar
              id="basic-avatar"
              aria-control="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{
                  cursor:'pointer',
              }}
              sx={{
                bgcolor: colors.green[500]
              }}
              >
                  <PersonIcon/>
              </Avatar>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
              >   
                
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose} >
                    <Link to='/login'  underline="none" style={{color:'#000'}}>   
                        Login
                    </Link> 
                </MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>     

              
                

           </Toolbar>
           

       </AppBar>
       <Toolbar/>
       
       
       
            
       </>
    );
}

export default Navbar;
