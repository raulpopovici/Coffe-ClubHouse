import { Container } from '@mui/material';
import { React,useState,useEffect,useContext} from 'react'
import { Footer } from '../components/Footer'
import { StoreClient} from './StoreClient'
import { StoreAdmin} from './StoreAdmin'
import AuthContext from '../context/auth'


export const Store = () => {
    const {user} = useContext(AuthContext);
    function LoadCorrectPage(){
        if(user){
            if(user.user_type == true){
                return <StoreAdmin/>
            }
        }
        return <StoreClient/>
    }

    return (
        <div>
           <LoadCorrectPage />
        </div>      
    );
}
export default Store;