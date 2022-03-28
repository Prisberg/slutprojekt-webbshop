
import { Button, Card, CardActions, CardContent, CardMedia, Table, TableBody, TableCell, TableContainer, TableRow, Typography, } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import { CSSProperties, useContext } from "react";
import { useParams } from 'react-router-dom';
import { CartContext } from "./Context";
import { products } from "./mockedProducts";


function ProductInfo() {
  let { id } = useParams();
  let idString = `${id}`;
  let idNumber = parseFloat(idString);

  let selectedProduct = products.filter((products) => {
    return products.id === idNumber
  });

  const { addToCart } = useContext(CartContext);

  return (
    <Card sx={{
      paddingTop: '10rem'
    }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Rolex
        </Typography>
        {selectedProduct.map((selectedProduct) => (
          <Box sx={{
            display: 'flex'
          }}
          >
            <Box
              component="img"
              alt="productImage"
              key={selectedProduct.image}
              src={selectedProduct.image}
            />
            <Typography sx={{ fontSize: '20px', }} key={selectedProduct.model} >
            {selectedProduct.model}
            </Typography>
            <Typography variant="h3" key={selectedProduct.price}>
              {selectedProduct.price}
            </Typography>
            <Typography key={selectedProduct.inDepth}>
              {selectedProduct.inDepth}
            </Typography>
            <CardActions disableSpacing sx={cardActionStyling} key={selectedProduct.id}>
              <Button sx={buyButtonStyle}
                onClick={() => { addToCart(selectedProduct) }}
              >
                Buy now
              </Button>
            </CardActions>
          </Box>
        ))}
      </CardContent>
    </Card>
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