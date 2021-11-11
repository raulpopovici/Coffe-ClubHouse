import { Container } from '@mui/material';
import { React,useState} from 'react'
import { Footer } from '../components/Footer'
import { StoreClient} from './StoreClient'
import { StoreAdmin} from './StoreAdmin'

export const Store = () => {
    const [isadmin,setIsAdmin] = useState(true);
    return (
        <div>
            {isadmin
                ? <StoreAdmin/>
                : <StoreClient/> 
            }
        </div>        
    );
}
export default Store;