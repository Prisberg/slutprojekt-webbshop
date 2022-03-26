
import { Grid, Button, Card, Typography, Select, MenuItem, TextField, InputLabel, FormControl, Paper } from "@mui/material";
import { border, Box, color, display, margin, SxProps } from "@mui/system";
import { userInfo } from "os";
import { Link } from 'react-router-dom';



function Checkout() {


  return (
    <Card sx={cardStyle}>
      <Box sx={boxStyle}>
        <Typography variant="h3">
          Billing adress
        </Typography>

        <Typography sx={{
          textAlign: 'center'
        }}>
        </Typography>
        <Grid container spacing={4} sx={{ display: 'flex' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="first-name"
              name="firstname"
              label="First Name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="last-name"
              name="lastname"
              label="Last name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="address"
              name="address"
              label="Address line 1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="city"
              name="city"
              label="City"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="country"
              name="country"
              label="Country"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="post-code"
              name="post-code"
              label="Zip / Postal code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to={'/checkout/delivery'} style={{textDecoration: 'none'}}>
              <Button sx={buttonStyle}
              >Proceed</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Card>
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