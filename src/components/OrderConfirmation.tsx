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
  
  return (
    <Card sx={cardStyle}>
      <Box sx={boxStyle}>
        <Typography variant="h3">Order confirmartion</Typography>

        <Typography
          sx={{
            textAlign: "center",
          }}
        ></Typography>
        <Grid container spacing={4} sx={{ display: "flex" }}>
          {cart.map((product) => ( 
            <TableBody>
              <TableRow key={product.id}>
                <TableCell>
                  <img src={product.image} height="100" />
                </TableCell>
                <TableCell>{product.model}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.price} kr</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Grid>
      </Box>      
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button
            sx={buttonStyle}
            onClick={() => {cart.map((product)=>{
              removeallpructs(product); } )}}>
            Keep browsing
          </Button>
        </Link>
      <TableCell>{total}kr</TableCell>
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
