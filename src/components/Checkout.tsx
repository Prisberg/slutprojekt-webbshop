import { Grid, Button, Card, Typography, Select, MenuItem, TextField, InputLabel, FormControl, Paper } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import { InputHTMLAttributes, useState } from "react";
import { Link } from 'react-router-dom';
import { withFormik, FormikProps, FormikErrors, Form, Field, Formik, useFormik } from 'formik';



function Checkout() {

  return (
    <Card sx={cardStyle}>
      <Box sx={boxStyle}>
        <Typography variant="h3">
          Billing adress
        </Typography>
        
          <form >
        <Grid container spacing={4} sx={{ display: 'flex' }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Title"
              id="title"
              name="title"
              type="text"
              
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Content"
              id="content"
              name="content"
              type="text"
              
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              label="Author"
              id="author"
              name="author"
              type="text"
              

            />
          </Grid>
          
          </Grid>
         
          
          <Grid item xs={12} sm={6}>
            <Link to={'/checkout/delivery'} style={{textDecoration: 'none'}}>
              <Button sx={buttonStyle}
              
              type="submit"
              >Proceed</Button>
            </Link>
          </Grid>
          </form>
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