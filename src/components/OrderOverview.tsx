import * as React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Button, Box, Card, Grid, SxProps, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext  } from './Context';
import { useContext } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { padding } from '@mui/system';


interface Props {
  
}



const Overview: React.FC<Props> = () => {

  const { cart, addToCart, removeCart, removeItems, total} = useContext(CartContext);
  const [quantity] = React.useState('');


    return (
        
        <Card sx={cardStyle}>
          <div>
          <Typography variant="h3" sx={{
            textAlign: 'center'
          }}>
            Order overview
          </Typography>
          
          {cart.map((product) => (
            <Box sx={test}>
            <Card sx={{
              width: '15rem',
              height: '15rem',
              float: 'left',
              display: 'inline',
              marginTop: '32px',
              marginLeft: '100px',
              marginBottom: '2rem'
            }}>
              <img src={product.image}
                                 
                height="100" />
           
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
          </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
           <Link to={'/checkout/adress'} style={{ textDecoration: 'none' }}>
                  <Button sx={button}
                  >Proceed</Button>
                </Link>
                </div>
            
            <TableCell
            style={{border: '1px solid black'}}
            >{total}kr</TableCell> 
      </Card>
    );
};

export default Overview;
  
  const h1: SxProps = {
    textAlign: 'center'
  }
  const boxStyle: SxProps = {
    backgroundColor: 'white',
    paddingBottom: '1rem',
  }
  const cardStyle: SxProps = {
    maxWidth: '60rem',
    paddingTop: '10rem',
   
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  const button: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#5f5f5f',
        color: '#fff',
    },
}
const buttonAlign: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '40rem',
    marginBottom: '1rem'
}
const removeButton: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center', 
}
const icon: SxProps = {
    color: 'black',
    fontSize: '2rem'
}
const test: SxProps = {
    display: {xs: 'flex', lg:'unset'},
    justifyContent: {xs: 'center', lg:'unset'},
    marginRight: {xs: '25%', lg:'none'}
}