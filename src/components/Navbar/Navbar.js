import React from 'react'
//import { Link } from 'react-router-dom';
import {colors,AppBar,Toolbar,IconButton, Typography,Button,Grid,Menu} from '@mui/material'
import { useState, useEffect, useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import {styled} from '@mui/styles';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import AuthContext from '../../context/auth';




const commonStyles ={
    bgcolor: '#1E3547',
    color:'#1E3547',
    m: 1,
    borderBottom:0,
    borderWidth:'1.7px',
    width:'4.3rem',

    '&:hover':{
        color:'#fff',
    },
    

};

const Navbar = () => {

    const [anchorEl,setAnchorEl] = useState(null);
    const {user,setUser} = useContext(AuthContext);
    const open = Boolean(anchorEl);
    const handleClick  = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () =>{
        setAnchorEl(null);
    }

    const handleLogout = () =>{
        setUser(null);
        localStorage.clear();
        setAnchorEl(null);
    }

    

    return (

       <>
       <AppBar style={{
           backgroundColor:'#1E3547'
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


                <Box sx={{
                   display:'flex',
                   ...commonStyles,
                   justifyContent:'center',
               }} style={{
                    marginRight:'1%',
                    marginTop:'12px'
               }}>
                
                    <Link href='/' underline="none" style={{
                        color:"#fff",

                    }}>
                        HOME
                    </Link>

               </Box>


          
               <Box sx={{
                   display:'flex',
                   ...commonStyles,
                   justifyContent:'center',
               }} style={{
                    marginRight:'2%',
                    marginTop:'12px'
                    

               }}>
                
                    <Link href='/store' underline="none" style={{
                        color:"#fff",

                    }}>
                        STORE
                    </Link>

               </Box>
               {user && user.user_type == false &&
                    <Link href='/cart' style={{
                        marginRight:'2%'
                    }}>
                    <IconButton aria-label="cart" >
                        <Badge color="primary">
                       
                            <ShoppingCartIcon />
                        
                        
                        </Badge>
                        
                   </IconButton>
                   </Link>   
               }     
               
               
        
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
                color:'#EAE7DE',
                background:'#0e1c26'
              }}
              >
                  {
                    
                    user ?  `${user.username[0]}`.toUpperCase(): <PersonIcon/>
                  }
                  
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
                    <Link href="/login"  underline="none" style={{color:'#000'}}>   
                        Login
                    </Link> 
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>     
           </Toolbar>
       </AppBar>
       
       
       
       
            
       </>
    );
}

export default Navbar;
