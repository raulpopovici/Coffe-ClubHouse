import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const MyCard = (props) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Container>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          The best coffee
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.price}€
        </Typography>
        <Typography variant="body2">
          {props.type}
          <br />
          {'"a benevolent smile"'}
        </Typography>
        </Container>
       
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}

export default MyCard;