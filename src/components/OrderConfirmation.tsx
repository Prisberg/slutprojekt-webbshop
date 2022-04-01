import { Table, TableBody, TableRow, TableCell, Button, Box, Card, Grid, SxProps, Typography, createTheme, ThemeProvider, Paper, } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";


function Confirmation() {
  const { cart, total, removeallpructs, addressInformation, shippingInformation, paymentInformation } = useContext(CartContext);
  let ordernumber = Math.round(Math.random() * 999999999999);

  

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Cormorant SC',
        'serif',
      ].join(','),
    },});

  return (
    <ThemeProvider theme={theme}>
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
          <Table>
            <TableBody >
              {cart.map((product) => (
                <Grid container  marginTop={'3rem'}>
                <TableRow key={product.id}>
                  <TableCell>
                    <img src={product.image} height="100" />
                  </TableCell>
                  <TableCell >{product.model}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.price} kr</TableCell>
                </TableRow>
                </Grid>
              ))}
            </TableBody >
            <TableBody>
              {addressInformation.map((addressInfo) => (
                <Box style={{
                  marginLeft: '2rem'
                  }}>
                <TableRow>
                  <TableCell>{addressInfo.name} {addressInfo.LName}</TableCell>
                  <TableCell>{addressInfo.address}</TableCell>
                  <TableCell>{addressInfo.city}</TableCell>
                </TableRow>
                </Box>
              ))}
            </TableBody>
            <TableBody >
              {shippingInformation.map((shippingInfo) => (
                <TableRow>
                  <TableCell>{shippingInfo.shippingType}</TableCell>
                  <TableCell>{shippingInfo.shippingDescription}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Box>
      <div style={{
        marginBottom: '10rem'
      }}>
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
      </div>
      <Typography>{total}kr</Typography>
      
    </Card>
    </div>
    </ThemeProvider>
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

