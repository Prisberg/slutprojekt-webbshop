import { Table, TableBody, TableRow, TableCell, Button, Box, Card, Grid, SxProps, Typography, } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";
import { shipping } from "./mockedData";


function Confirmation() {
  const { cart, total, removeallpructs, addressInformation, shippingInformation, paymentInformation } = useContext(CartContext);

  /*   const addressInfoLatest = addressInformation[addressInformation.length - 1]
    const shippingInfoLatest = shippingInformation[shippingInformation.length - 1]
    const addressInfoLatest = addressInformation[addressInformation.length - 1] */

  let ordernumber = Math.round(Math.random() * 999999999999);
  console.log(shippingInformation)

  return (
    <Card sx={cardStyle}>
      <Box sx={boxStyle}>
        <div style={{
          textAlign: 'center'
        }}>
          <Typography variant="h3">Order confirmartion</Typography>
          <Typography>Thank you for your order</Typography>
          <Typography>Your order number: {ordernumber}</Typography>
        </div>
        <Grid container spacing={4} sx={{ display: "flex" }}>
          <Table sx={{
            margin: '3rem'
          }}>
            <TableBody sx={{
              padding: '1rem'
            }} >
              {cart.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img src={product.image} height="100" />
                  </TableCell>
                  <TableCell>{product.model}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.price} kr</TableCell>
                </TableRow>
              ))}
              {addressInformation.map((addressInfo) => (
                <TableRow>
                  <TableCell>Ordered by: {addressInfo.name} {addressInfo.LName}</TableCell>
                  <TableCell>Deliver to: {addressInfo.address}</TableCell>
                  <TableCell>{addressInfo.city}</TableCell>
                </TableRow>
              ))}
{/*          funkar inte än     {shippingInformation.map((shippingInfo) => (
                <TableRow>
                  <TableCell>{shippingInfo.shippingType}</TableCell>
                  <TableCell>Deliver to: {shippingInfo.shippingDescription}</TableCell>
                  <TableCell>{total} kr</TableCell>
                </TableRow>
              ))}*/}
            </TableBody> 
          </Table>
        </Grid>
      </Box>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button
          sx={buttonStyle}
          onClick={() => {
            cart.map((product) => {
              removeallpructs(product);
            })
          }}>
          Keep browsing
        </Button>
      </Link>
    </Card>
  );
}

export default Confirmation;

const h1: SxProps = {
  textAlign: "center",
};
const boxStyle: SxProps = {
  backgroundColor: "white",
  paddingBottom: "1rem",
};
const buttonStyle: SxProps = {
  marginLeft: "15rem",
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
  paddingBottom: "2rem",
  backgroundColor: "rgba(0,0,0,0)",
  marginLeft: "auto",
  marginRight: "auto",
};
