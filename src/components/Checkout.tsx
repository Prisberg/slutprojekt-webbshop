import { Grid, Button, Card, Typography, Select, MenuItem, TextField, InputLabel, FormControl, Paper, createTheme, ThemeProvider } from "@mui/material";
import { border, Box, color, display, margin, SxProps } from "@mui/system";
import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from "./Context";

function Checkout() {

  const { addressInformation, storeAddressInformation } = useContext(CartContext);
  const navigate = useNavigate();

  const [inputInfo, setInputInfo] = useState({
    name: '',
    LName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    tel: '',
  })

  const handleProceed = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    storeAddressInformation(inputInfo);
    navigate('/checkout/delivery');
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setInputInfo({ ...inputInfo, [e.target.name]: e.target.value });
  };

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Cormorant SC',
        'serif',
      ].join(','),
    },});

  return (
    <ThemeProvider theme={theme}>
    <Card sx={cardStyle}>
      <Box sx={boxStyle}>
        <Typography variant="h3">
          Billing adress
        </Typography>
        <form onSubmit={handleProceed}>
          <Grid container spacing={4} sx={{ display: 'flex' }}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="name"
                required
                fullWidth
                placeholder="First name *"
                value={inputInfo.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="LName"
                required
                fullWidth
                placeholder="Last name *"
                value={inputInfo.LName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="email"
                name="email"
                required
                fullWidth
                placeholder="Email *"
                value={inputInfo.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="tel"
                name="tel"
                required
                fullWidth
                placeholder="Telephone number *"
                value={inputInfo.tel}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="address"
                required
                fullWidth
                placeholder="Address *"
                value={inputInfo.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="city"
                required
                fullWidth
                placeholder="City *"
                value={inputInfo.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="country"
                required
                fullWidth
                placeholder="country *"
                value={inputInfo.country}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="zip"
                required
                fullWidth
                placeholder="Zip / Postal code *"
                value={inputInfo.zip}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                sx={buttonStyle}>
                Proceed
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Card >
    </ThemeProvider>
  );
};

export default Checkout;

const h1: SxProps = {
  textAlign: 'center'
}
const boxStyle: SxProps = {
  backgroundColor: 'white',
  paddingBottom: '1rem',
}
const buttonStyle: SxProps = {
  marginLeft: '15rem',
  backgroundColor: 'black',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#5f5f5f',
    color: '#fff',
  }
}
const cardStyle: SxProps = {
  maxWidth: '60rem',
  paddingTop: '10rem',
  paddingBottom: '2rem',
  backgroundColor: 'rgba(0,0,0,0)',
  marginLeft: 'auto',
  marginRight: 'auto',
} 