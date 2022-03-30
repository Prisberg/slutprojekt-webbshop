import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box,
  Card,
  Grid,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";


function Confirmation() {
  const { cart, total, removeallpructs } = useContext(CartContext);
  let ordernumber = Math.round(Math.random() * 999999999999);


  return (
    <Card sx={cardStyle}>
      <Box sx={boxStyle}>
        <div style={{
          textAlign: 'center'
        }}>
        <Typography variant="h3">Order confirmartion</Typography>
        <Typography>Thank you for your order</Typography>
        <span>Your order number</span>
        <Typography sx={productStyle}>{ordernumber}</Typography>
        </div>
        <Grid container spacing={4} sx={{ display: "flex" }}>
          <Table>
            <TableBody >
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
            </TableBody>
          </Table>
        </Grid>
      </Box>
      <Link to={"/checkout/confirmation/checkout/order"} style={{ textDecoration: "none" }}>
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
      <Typography>{total}kr</Typography>
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
const productStyle: SxProps = {
  marginBottom: '2rem',
}
