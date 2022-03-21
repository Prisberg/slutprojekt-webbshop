import { Grid, Button, Card, Typography, TextField, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import { border, color, display, margin } from "@mui/system";
import { userInfo } from "os";
import { Link } from 'react-router-dom';



function Checkout() {

  
    return ( 
      <Card 
        sx={{
        maxWidth: '60rem',
        margin: 'auto',
        marginTop: '15rem',
        paddingBottom: '2rem'

      }}>
      <Typography sx={{
        textAlign: 'center'
      }}>
        <h1>Shipping</h1>
      </Typography>

      <Grid container spacing={4}
          sx={{
            display: 'flex'
      }}
      > 
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
       id="first-name"
       name="lastname"
       label="First Name"
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
       {/* <Link to={'delivery'}>
       <Button
       sx={{
         marginLeft: '15rem',
         backgroundColor: 'black',
         color: '#fff',
         '&:hover': {
          backgroundColor: '#5f5f5f',
          color: '#fff',
      }
       }}
       >Proceed</Button>
       </Link> */}

          <FormControl sx={{ m: 1, minWidth: 150, marginTop: '10rem' }}>
          <InputLabel id="demo-simple-select-autowidth-label">Delivery</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            label="Age"
          >
            <MenuItem value={10}>Standard</MenuItem>
            <MenuItem value={21}>Express</MenuItem>
            <MenuItem value={22}>Pick up at store</MenuItem>
          </Select>
          </FormControl>
     </Grid>
     </Grid>
     </Card>
    );
  };
  
export default Checkout;