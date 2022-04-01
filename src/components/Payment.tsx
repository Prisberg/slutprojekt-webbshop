
import { Grid, Button, Typography, TextField, Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, createTheme, ThemeProvider, CircularProgress } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fakeFetch } from "./ConfirmationFetch";
import { CartContext } from "./Context";
import NavbarTwo from "./Navbar2";


interface Props {
  
}


function Payment(props: Props) {
  const { addressInformation, shippingInformation, storePaymentInformation } = useContext(CartContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)


  /*Use this in confirmation to display latest information*/
  const addressInfoLatest = addressInformation[addressInformation.length - 1]

  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    cardNumber: '',
    expires: '',
    CVV: '',
    tel: addressInfoLatest.tel,
    ssn: '',
  })

  const handleProceed = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fakeFetch('');
    setIsLoading(false);
    if (response === 'valid') {
        storePaymentInformation(paymentInfo);
        navigate('/checkout/confirmation');

    }
    
    
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  


  
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Cormorant SC',
        'serif',
      ].join(','),
    },});

  return (
    <form onSubmit={handleProceed}>
      <ThemeProvider theme={theme}>
      <NavbarTwo/>
      <Box sx={primaryBox}>
        <Box sx={secondaryBox}>
          <Typography variant="h5" gutterBottom>
            Payment methods
          </Typography>
          <Accordion>
            <AccordionSummary>
              <Typography>
                Payment card
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="name"
                    label="First- and lastname"
                    fullWidth
                    autoComplete="cc-name"
                    value={paymentInfo.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="cardNumber"
                    label="Card number"
                    fullWidth
                    autoComplete="cc-number"
                    value={paymentInfo.cardNumber}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="expires"
                    label="Expiration date"
                    fullWidth
                    autoComplete="cc-exp"
                    value={paymentInfo.expires}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="CVV"
                    label="CVV"
                    helperText="Last three digits on the back of your card"
                    fullWidth
                    autoComplete="cc-csc"
                    value={paymentInfo.CVV}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        name="saveCard"
                        value="yes"
                      />
                    }
                    label="Remember my information for next time"
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Swish
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={6}>
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <TextField
                    type="text"
                    required
                    name="tel"
                    label="Telephone number for Swish-payment method"
                    fullWidth
                    value={paymentInfo.tel}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Invoice
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <TextField
                    required
                    name="ssn"
                    label="Social security number"
                    fullWidth
                    autoComplete="personnummer"
                    value={paymentInfo.ssn}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Button type="submit" sx={button}
          >
            { isLoading ?  (
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            </Box>
            ): 'purchase' }

          </Button>
        </Box>
      </Box>
      </ThemeProvider>
    </form>
  );
}

export default Payment;

const secondaryBox: SxProps = {
  backgroundColor: 'white',
  padding: '1rem',
  maxWidth: '60rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}
const primaryBox: SxProps = {
  paddingTop: '6rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}
const button: SxProps = {
  width: '5rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'black',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#5f5f5f',
    color: '#fff',
  },
}