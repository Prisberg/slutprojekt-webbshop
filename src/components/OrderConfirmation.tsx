import { Table, TableBody, TableRow, TableCell, Button, Box, Card, Grid, SxProps, Typography, } from "@mui/material";
import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext, CartItem } from "./Context";
import { shipping } from "./mockedData";



function SaveProducts() {
  const { cart } = useContext(CartContext);
  const orderedProducts = [...cart];
  console.log(orderedProducts);
  return (
    <Box>
      {orderedProducts.map((product) => (
        <TableRow key={product.id}>
          <TableCell>
            <img src={product.image} height="100" />
          </TableCell>
          <TableCell>{product.model}</TableCell>
          <TableCell>{product.quantity}</TableCell>
          <TableCell>{product.price} kr</TableCell>
        </TableRow>
      ))}
    </Box>
  );
}

export default function Confirmation() {
  const { cart, total, removeallpructs, addressInformation, shippingInformation, paymentInformation } = useContext(CartContext);
  let ordernumber = Math.round(Math.random() * 999999999999);

  const shippingInfoLatest: any = shippingInformation[shippingInformation.length - 1]
  const addressInfoLatest = addressInformation[addressInformation.length - 1]

  let ordernumber = Math.round(Math.random() * 999999999999);

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Cormorant SC',
        'serif',
      ].join(','),
    },});

    useEffect(() => {
      // code to run after render goes here
      removeallpructs();
    }, []);
   
  return (
    <ThemeProvider theme={theme}>
      <NavbarTwo/>
      <div>

    <Card sx={cardStyle}>
      <Box sx={boxStyle}>
        <div style={{
          textAlign: 'center'
        }}>
           
        <Typography variant="h3">Order confirmartion</Typography>
        <Typography>Thank you for your order</Typography>
        <Typography>Your order number</Typography>
        <Typography>{ordernumber}</Typography>
        </div>
        <Grid container spacing={4} sx={{ display: "flex" }}>
          <Table sx={{
            margin: '3rem'
          }}>
            <TableBody sx={{
              padding: '1rem'
            }} >
              <SaveProducts />
              <TableRow>
                <TableCell>Ordered by: {addressInfoLatest.name} {addressInfoLatest.LName}</TableCell>
                <TableCell>Deliver to: {addressInfoLatest.address} | {addressInfoLatest.city}</TableCell>

              </TableRow>
              <TableRow>
                <TableCell>{shippingInfoLatest[0].shippingType}</TableCell>
                <TableCell>{shippingInfoLatest[0].shippingDescription}</TableCell>
                <TableCell>{shippingInfoLatest[0].shippingCost} kr</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total sum: {total} kr</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Box>
      <div style={{
        marginBottom: '10rem'
      }}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button
          sx={buttonStyle}>
          Keep browsing
        </Button>
      </Link>
      </div>
      <Typography>{total}kr</Typography>
      
    </Card>
    </div>
    </ThemeProvider>
  );
}

const h1: SxProps = {
  textAlign: "center",
};
const boxStyle: SxProps = {
  backgroundColor: "white",
  paddingBottom: "1rem",
};
const buttonStyle: SxProps = {
  marginLeft: '25rem',
  marginTop: '1rem',
  paddingBottom: '1rem',
  backgroundColor: "black",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#5f5f5f",
    color: "#fff",
  },
};
const cardStyle: SxProps = {
  maxWidth: "60rem",
  paddingTop: "10rem",
  backgroundColor: "rgba(0,0,0,0)",
  marginLeft: "auto",
  marginRight: "auto",
};

