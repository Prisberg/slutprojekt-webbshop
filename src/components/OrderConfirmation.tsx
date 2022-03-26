import { TableContainer, Table, TableBody, TableRow, TableCell, Button, Box, Card, Grid, SxProps, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from "./Context";


function Confirmation() {
  const {total, cart} = useContext(CartContext);
    return (

        <Card sx={cardStyle}>
        <Box sx={boxStyle}>
          <Typography variant="h3">
            Order confirmartion
          </Typography>
  
          <Typography sx={{
            textAlign: 'center'
          }}>
          </Typography>
          <Grid container spacing={4} sx={{ display: 'flex' }}>
            <Grid item xs={12} sm={6}>
              Thank you for your order
            </Grid>
            <Grid item xs={12} sm={6}>
              test
            </Grid>
            <Grid item xs={12} sm={6}>
              test
            </Grid>
            <Grid item xs={12} sm={6}>
              test
            </Grid>
            <Grid item xs={12} sm={6}>
            test
            </Grid>
            <Grid item xs={12} sm={6}>
              test
            </Grid>
            <Grid item xs={12} sm={6}>
              test
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to={'/'} style={{textDecoration: 'none'}}>
                <Button sx={buttonStyle}
                >Keep browsing</Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    );
};

export default Confirmation;
  
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