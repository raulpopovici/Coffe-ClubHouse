import { Container } from '@mui/material';
import React from 'react'
import { Footer } from '../components/Footer'

export const StoreAdmin = () => {
    return (
        <div>
            <div style={{marginTop:'500px'}}>
            <Container>
                Welcome to the store admin page
            </Container>
            </div>
            <Footer/>
        </div>
    );
}

export default StoreAdmin;