import { Container , Grid} from "@mui/material";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import { TableContainer } from "@mui/material";
import React, { useState, useEffect} from "react";
import AddProductModal from '../Modal/AddProductModal'
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export const ProductView = () => {
   
    const [products,setProducts] = useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const [isModified,setIsModified] = useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false);setIsModified(!isModified)};
    
    const handleChangePage = (event, newPage) => {
            setPage(newPage);
          };
          const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
    };
    
    useEffect(() => {
        axios.get('/store/products')
        .then((res) => setProducts(res.data))
        .catch(err => console.log(err))
    },[isModified]);

    const handleDeleteProduct = async (id) => {
        axios.delete(`/deleteProduct/${id}`)
        .then((res) => setIsModified(!isModified))
        .catch(err => console.log(err))
        
    }
    
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;


    return (


       <Container style ={{height:"100%", marginBottom:'25vh'}}>
           <Grid container justifyContent="flex-end" alignContent="flex-end">
                <Fab sx ={{bgcolor: "#1E3547", color:"#fff"}}aria-label="add" onClick={handleOpen}>
                <AddIcon />
                </Fab>
           </Grid>
           <Grid container justifyContent="center">
                 <TableContainer component = {Paper} display = "flex" style ={{flexGrow :1, marginTop:"10%", marginBottom:"30px"}}>
                      <Table sx={{ minWidth: 700}} aria-label="custom pagination table">
                      <TableHead>
                          <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Price</TableCell>
                              <TableCell>Type of coffee</TableCell>
                              <TableCell>Country of origin</TableCell>
                              <TableCell></TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                     {(rowsPerPage > 0
                         ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                         : products
                     ).map((product) => (
                         <TableRow key={product.id}>
                         <TableCell>
                             {product.name}
                         </TableCell>
                         <TableCell >
                             {product.price}
                         </TableCell>
                         <TableCell >
                             {product.coffee_type}
                         </TableCell>
                         <TableCell >
                             {product.country_origin}
                         </TableCell>
                         <TableCell >
                         <Button onClick = {() => {handleDeleteProduct(product.id)}} startIcon={<DeleteIcon style={{color: '#1E3547'}}/>}>
                            
                        </Button>
                         </TableCell>

                         </TableRow>


                     ))}

                     {emptyRows > 0 && (
                         <TableRow style={{ height: 53 * emptyRows }}>
                         <TableCell colSpan={6} />
                         </TableRow>
                     )}
                     </TableBody>
                     </Table>
                     </TableContainer>
                     <TablePagination
                     rowsPerPageOptions={[5, 10, 25]}
                     component="div"
                     count={products.length}
                     rowsPerPage={rowsPerPage}
                     page={page}
                     onPageChange={handleChangePage}
                     onRowsPerPageChange={handleChangeRowsPerPage}
                     />
     </Grid>

     
     <AddProductModal isModalOpen={open} onClose={handleClose}/>

    </Container>       
    );
}

export default ProductView;

