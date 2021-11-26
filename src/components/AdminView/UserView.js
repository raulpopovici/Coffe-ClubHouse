import { Container , Grid,Box, TableContainer} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
export const UserView = () => {
   
    const [users,setUsers] = useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    useEffect(() => {
        axios.get('/store')
        .then((res) => setUsers(res.data))
        .catch(err => console.log(err))
    })

    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;


    return (
        <Container style ={{height:"100%"}}>
           <Grid container justifyContent="center">
                    <TableContainer component = {Paper} display = "flex" style ={{flexGrow :1, marginTop:"10%", marginBottom:"30px"}}>
                        <Table sx={{ minWidth: 700}} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {(rowsPerPage > 0
                            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : users
                        ).map((user) => (
                            <TableRow key={user.id}>
                            <TableCell >
                                {user.username}
                            </TableCell>
                            <TableCell>
                                {user.email}
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
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        />
        </Grid>
       </Container>        
    );
}


export default UserView;