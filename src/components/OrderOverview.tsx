import * as React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Button, Box, Card, Grid, SxProps, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext  } from './Context';
import { useContext } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



interface Props {
  
}



const Overview: React.FC<Props> = () => {

  const { cart, addToCart, removeCart, removeItems, total} = useContext(CartContext);
  const [quantity] = React.useState('');


    return (
        
        <Card sx={cardStyle}>
          <Box sx={{
            backgroundColor: 'white',
          }}>
          <Typography variant="h3" sx={{
            textAlign: 'center'
          }}>
            Order overview
          </Typography>
          
          {cart.map((product) => (
            <Box sx={test}>
            <Card sx={cards}>
              <img  src={product.image}
                   height="100"
                   />
           
           <TableCell>{product.model}</TableCell>
          <TableCell>{product.price} kr</TableCell>
          
            <Grid item xs={12} sm={6} sx={removeButton}>   
                <Button 
                onClick={() => {
                  removeItems(product);
               }}
                > <DeleteForeverIcon sx={icon}/> </Button>
                {/* <Button  
                  onClick={() => {
                  addToCart(product);
                  }}>
                  Add
                </Button> */}
                
               </Grid>
               </Card>
               </Box>
               
           ))}
          </Box>
            <Box sx={{
              display:'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
            }}>
           <Link to={'/checkout/adress'} style={{ textDecoration: 'none' }}>
                  <Button sx={button}
                  >Proceed</Button>
                </Link>
                
            
            <TableCell
            sx={orderview}
            >{total}kr</TableCell> 
            </Box>
      </Card>
    );
};

export default Overview;

  const cardStyle: SxProps = {
    paddingTop: '10rem',
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    width:{
      xs: 400, // theme.breakpoints.up('xs')
      sm: 600, // theme.breakpoints.up('sm')
      md: 700, // theme.breakpoints.up('md')
      lg: 1000, // theme.breakpoints.up('lg')
      xl: 1200, // theme.breakpoints.up('xl')
      
    }
    
  }
  const button: SxProps = {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#5f5f5f',
        color: '#fff',
    },
}
const removeButton: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center', 
}
const icon: SxProps = {
    color: 'black',
    fontSize: '2rem',
    
}
const test: SxProps = {
    display: {xs: 'flex', lg:'unset'},
    justifyContent: {xs: 'center', lg:'unset'},
    marginRight: {xs: '25%', lg:'none'},
    
}
const cards: SxProps={
  height: '15rem',
  float: 'left',
  display: 'inline',
  marginTop: '32px',
  marginLeft: '100px',
  marginBottom: '2rem',
 
}
const orderview: SxProps={
  border: '1px solid black',
  display: 'flex',
  backgroundColor: 'white',
}