
import { Grid, Button, Typography, TextField, Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, createTheme, ThemeProvider, CircularProgress, Radio } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fakeFetch } from "./ConfirmationFetch";
import { CartContext } from "./Context";


interface Props {

}

function Payment(props: Props) {
  const { addressInformation, shippingInformation, storePaymentInformation } = useContext(CartContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [selectedValue, setSelectedValue] = useState('a');

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
    },
  });

  function handleChangeRadio(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  }

  function RenderPayment() {
    if (selectedValue === 'a') {
      return (
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
      )
    } else if (selectedValue === 'b') {
      return (
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
        </Grid>)
    } else {
      return (
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
      )
    }
  }

  return (
    <form onSubmit={handleProceed}>
      <ThemeProvider theme={theme}>
        <Box sx={primaryBox}>
          <Box sx={secondaryBox}>
            <Typography variant="h5" gutterBottom>
              Payment methods
            </Typography>
            <Typography>
              Payment Card
              <Radio
                onChange={handleChangeRadio}
                value={'a'}
                color="default"
                name="radio-button"
                inputProps={{ 'aria-label': 'a' }}
                size="small"
                checked={selectedValue === 'a'}
              />
            </Typography>
            {selectedValue === 'a' ? <RenderPayment /> : null }
            <Typography>
              Swish
              <Radio
                onChange={handleChangeRadio}
                value={'b'}
                color="default"
                name="radio-button"
                inputProps={{ 'aria-label': 'b' }}
                size="small"
                checked={selectedValue === 'b'}
              />
            </Typography>
            {selectedValue === 'b' ? <RenderPayment /> : null }
            <Typography>
              Invoice
              <Radio
                onChange={handleChangeRadio}
                value={'c'}
                color="default"
                name="radio-button"
                inputProps={{ 'aria-label': 'c' }}
                size="small"
                checked={selectedValue === 'c'}
              />
            </Typography>
            {selectedValue === 'c' ? <RenderPayment /> : null }
            <Button type="submit" sx={button}
            >
              {isLoading ? (
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>
              ) : 'purchase'}

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