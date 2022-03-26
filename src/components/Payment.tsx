
import { Grid, Button, Card, Typography, Select, MenuItem, TextField, InputLabel, FormControl, Paper, Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel } from "@mui/material";
import { border, Box, color, display, margin, SxProps } from "@mui/system";
import { userInfo } from "os";
import { Link } from 'react-router-dom';



function Payment() {

  return (
    <form action="" method="get">
      <Box sx={primaryBox}>
        <Box sx={secondaryBox}>
          <Typography variant="h5" gutterBottom>
            Betalningsalternativ
          </Typography>
          <Accordion>
            <AccordionSummary>
              <Typography>
                Kortbetalning
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cardName"
                    label="För- och efternamn"
                    fullWidth
                    autoComplete="cc-name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cardNumber"
                    label="Kortnummer"
                    fullWidth
                    autoComplete="cc-number"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="expDate"
                    label="Utgångsdatum"
                    fullWidth
                    autoComplete="cc-exp"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="cvv"
                    label="CVV"
                    helperText="Sista tre siffrorna på baksidan av kortet"
                    fullWidth
                    autoComplete="cc-csc"
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
                    label="Kom ihåg mina kortuppgifter till nästa gång"
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
                    required
                    id="cardName"
                    label="Telefonnummer för Swishbetalning"
                    fullWidth
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
                Faktura
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
                    id="Personnummer"
                    label="Personnummer"
                    fullWidth
                    autoComplete="cc-Personnummer"
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Link to={'/checkout/confirmation'} style={{ textDecoration: 'none' }}>
            <Button sx={button}>
              Proceed
            </Button>
          </Link>
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