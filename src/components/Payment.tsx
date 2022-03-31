
import { Grid, Button, Typography, TextField, Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "./Context";



function Payment() {
  const { addressInformation, shippingInformation, storePaymentInformation } = useContext(CartContext);
  const navigate = useNavigate();

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

  const handleProceed = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    storePaymentInformation(paymentInfo);
    navigate('/checkout/confirmation');
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleProceed}>
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
          <Button type="submit" sx={button}>
            Purchase
          </Button>
        </Box>
      </Box>
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
  backgroundColor: 'black',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#5f5f5f',
    color: '#fff',
  },
}