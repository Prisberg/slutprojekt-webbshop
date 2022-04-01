import * as React from 'react';
import NavbarTwo from "./Navbar2";
import { TableCell, Button, Box, Card, Grid, SxProps, TextField, Typography, createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext  } from './Context';
import { useContext } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


interface Props {
  
}


const Overview: React.FC<Props> = () => {

  const { cart, addToCart, removeCart, removeItems, total} = useContext(CartContext);
  const [quantity] = React.useState('');

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Cormorant SC',
        'serif',
      ].join(','),
    },});


    return (
      <ThemeProvider theme={theme}>
        <NavbarTwo/>
        <Card sx={cardStyle}>
          <Box sx={{
            backgroundColor: 'white',
          }}>
          <Typography variant="h3" sx={{
            textAlign: 'center'
          }}>
            Order overview
          </Typography>
          <Link to={'/checkout/adress'} style={{ textDecoration: 'none' }}>
                  <Button sx={button}
                  >Proceed</Button>
                </Link>
          <TableCell
            sx={orderview}
            >Total: {total}kr</TableCell> 
          
          {cart.map((product) => (
            <Card>
            <Card sx={cards}>
              <img  src={product.image}
                   height="100"
                   />
           
           <TableCell>{product.model}</TableCell>
          <TableCell>{product.price} kr</TableCell>
          
            <Grid item xs={12} sm={6} sx={removeButton}>   
              
                <Button sx={buttonStyle}
                onClick={() => {
                addToCart(product);
                }}>
                +
                </Button>

                <TextField
                sx={{
                  width: '3rem'
                }}
                variant="outlined"
                id={quantity}
                value={product.quantity}
                >
                </TextField>
                <Button sx={buttonStyle}
                onClick={() => {
                removeItems(product);
               }}
                > 
                -
                </Button>

                <DeleteForeverIcon 
                sx={iconDelete}
                onClick={() => {
                removeCart(product);
                }}
                />

               </Grid>
               </Card>
               </Card>
               
           ))}
          </Box>
      </Card>
      </ThemeProvider>
    );
};

export default Overview;

  const cardStyle: SxProps = {
    paddingTop: {xs: '6rem'},
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
  marginTop: '2rem',
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

    marginRight: {xs: '25%', lg:'none'}
}
const buttonStyle: SxProps = {
    fontSize: '3rem',
    color: 'black',
    height: '4rem'
}
const quantity: SxProps = {
    width: '2rem', 

    marginRight: {xs: '25%', lg:'none'},
    
}
const cards: SxProps={
  height: '15rem',
  width: { xs: '20rem'},
  float: 'left',
  display: 'inline',
  marginTop: '32px',
  marginLeft: { xs: '40px', sm: '140px', md: '180px', lg: '340px', xl: '440px'},
  marginBottom: '2rem',
 
}
const orderview: SxProps={
  
  width: '5rem',
  border: '1px solid black',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'white',
}
const buttonAlign: SxProps={
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem'
}
const iconDelete: SxProps= {
  cursor: 'pointer',
  color: 'black',
  '&:hover': {
      color: 'red',
  }
}