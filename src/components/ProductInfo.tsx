
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography, } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import { CSSProperties, useContext } from "react";
import { useParams } from 'react-router-dom';
import { CartContext } from "./Context";
import { products } from "./mockedData";
import { Link } from 'react-router-dom';


function ProductInfo() {
  let { id } = useParams();
  let idString = `${id}`;
  let idNumber = parseFloat(idString);

  let selectedProduct = products.filter((products) => {
    return products.id === idNumber
  });

  const { addToCart } = useContext(CartContext);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        paddingTop: '7rem',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Card sx={{
        width: '80%',
        maxHeight: '70%'
      }}>
        <CardContent sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {selectedProduct.map((selectedProduct) => (
            <Box
              key={selectedProduct.id}
              sx={{
                display: { xs: '', lg:'flex'}
              }}
            >
              <Box
                component="img"
                alt="productImage"
                sx={{
                  height: {xs: '15rem',  sm: '15rem', lg: '40rem'},
                  marginRight: {xs: 'auto'},
                  marginLeft: {xs: 'auto'},
                  display: 'block',
                  objectFit: 'contain',
                }}
                src={selectedProduct.image}
              />
              <Box sx={{
                marginTop: {xs: '', lg:'5rem'},
                marginRight: {xs: 'rem'}
              }}>
              <Typography variant="h5" gutterBottom>
                {selectedProduct.maker}
              </Typography>

                <Typography sx={{ fontSize: '20px', }}>
                  {selectedProduct.model}
                </Typography>
                <Typography variant="h3">
                  {selectedProduct.price} kr
                </Typography>
                <Typography>
                  {selectedProduct.inDepth}
                </Typography>
                <CardActions disableSpacing sx={cardActionStyling}>
                  <div style={linkStyle}>
                  <Button sx={buyButtonStyle}
                    onClick={() => { addToCart(selectedProduct) }}
                  >
                    Buy now
                  </Button>
                  </div>
                  <Link to={'/'} style={linkStyle}>
                  <Button sx={buyButtonStyle}
                    onClick={() => { addToCart(selectedProduct) }}
                  >
                    Go back
                  </Button>
                  </Link>
                </CardActions>
                </Box>
              </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductInfo;


const linkStyle: CSSProperties = {
  textDecoration: 'none',
  flexGrow: 1,
}
const cardStyling: SxProps = {
  minWidth: '20rem',
  minHeight: '33rem',
}
const cardActionStyling: SxProps = {
  display: 'flex',
  justifyContent: 'flex-end',
}
const buyButtonStyle: SxProps = {
  margin: 'auto',
  marginTop: '1rem',
  backgroundColor: 'black',
  color: 'white',
  '&:hover': {
    backgroundColor: '#5f5f5f',
    color: '#fff',
  }
}
const boxStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '50px'
}
const mediaCardStyle: SxProps = {
  height: '100%',
  width: '100%',
  display: 'block',
  objectFit: 'cover',
}
const typographyStyle: CSSProperties = {
  color: 'black',
  borderColor: 'black',
  fontSize: '0.8rem',
}
const buttonStyle: SxProps = {
  height: '23em',
  width: '100%',
  display: 'block',
}