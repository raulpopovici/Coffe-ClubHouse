import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductView from '../components/AdminView/ProductView'
import UserView from '../components/AdminView/UserView'
import Footer from '../components/Footer';


function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

export  const StoreAdmin = () => {
  const [value, setValue] = React.useState(0);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  };

  return (
      <>
          <Box sx={{ width: '100%', marginTop:'80px'}}>
            <Tabs value={selectedTab} onChange = { handleChange} aria-label="basic tabs example">
              <Tab label="Users"/>
              <Tab label="Products"/>
            </Tabs>
        </Box>
        {selectedTab === 0 && <UserView/>}
        {selectedTab === 1 && <ProductView/>}
    
    </>

  );
}

export default StoreAdmin;