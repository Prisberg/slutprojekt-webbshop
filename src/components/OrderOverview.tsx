import * as React from 'react';
import { TableCell, Button, Box, Card, Grid, SxProps, TextField, Typography, createTheme, ThemeProvider, TableRow } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from './Context';
import { useContext } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Overview() {

  const { cart, addToCart, removeCart, removeItems, total } = useContext(CartContext);
  const [quantity] = React.useState('');
  const navigate = useNavigate();

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Cormorant SC',
        'serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingTop: '7rem' }}>
        <Card sx={cardStyle}>
          <Typography variant="h3" sx={{
            textAlign: 'center'
          }}>
            Order overview
          </Typography>

          <Card>
            {cart.map((product) => (
              <Card
                key={product.id}
                sx={cards}>
                <img src={product.image}
                  height="100"
                />
                <Typography variant='h6'>{product.model} | {product.price} kr</Typography>
                <Grid item xs={12} sm={6} sx={removeButton}>
                  <Box sx={{ outline: 'solid', display: 'flex', width: '11rem', borderRadius: '1rem', justifyContent: 'space-evenly' }}>
                    <Button
                      sx={mathButton}
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      +
                    </Button>
                    <Box sx={{
                      maxWidth: 40,
                      height: 36,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '2rem',
                    }}>
                      {product.quantity}
                    </Box>
                    <Button
                      sx={mathButton}
                      onClick={() => {
                        removeItems(product);
                      }}
                    >
                      -
                    </Button>
                  </Box>
                  <DeleteForeverIcon
                    sx={iconDelete}
                    onClick={() => {
                      removeCart(product);
                    }}
                  />
                </Grid>
              </Card>
            ))}
          </Card>
          <Typography sx={orderview}>
            Total: {total}kr
          </Typography>
          <Button
            sx={button}
            onClick={() => {
              navigate('/')
            }}
          >
            Go back
          </Button>
          {cart.length === 0 ? null :
            <Button
              sx={button}
              onClick={() => {
                navigate('/checkout/adress')
              }}
            >
              Proceed
            </Button>
          }
        </Card>
      </Box>
    </ThemeProvider >
  );
};

export default Overview;


const mathButton: SxProps = {
  color: 'black',
  fontWeight: 'bold'
}
const cardStyle: SxProps = {
  backgroundColor: 'white',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  maxWidth: {
    xs: 350,
    sm: 600,
    md: 700,
    lg: 1000,
    xl: 1200,
  }
}
const button: SxProps = {
  margin: '1.5rem',
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
const buttonStyle: SxProps = {
  fontSize: '3rem',
  color: 'black',
  height: '4rem'
}
const cards: SxProps = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '15rem',
  minWidth: '15rem',
}
const orderview: SxProps = {
  width: '12rem',
  border: '1px solid black',
  margin: '0 auto',
  backgroundColor: 'white',
}
const iconDelete: SxProps = {
  cursor: 'pointer',
  color: 'black',
  '&:hover': {
    color: 'red',
  }
}