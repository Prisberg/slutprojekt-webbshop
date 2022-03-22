import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card, Grid, Radio, SxProps, Table, TableBody, TableCell, TableContainer, TableRow, Typography, Button } from '@mui/material';
import { spacing } from '@mui/system';

interface Props {
   
    
}

const Delivery: React.FC<Props> = () => {
  const [DeliveryDate, setDeliveryDate] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChanged = (event: React.ChangeEvent<{ value: unknown }>) => {
      setDeliveryDate(event.target.value as string);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
  };

  return (
      <Card sx={cardStyle}>
          <Typography sx={h1}>
              <h1>Shipping options</h1>
          </Typography>
          <Grid sx={mainStyle}>
              <TableContainer>
                  <Table sx={table} aria-label="simple table">
                      <TableBody>
                          <TableRow>
                              <TableCell>
                                  <Radio
                                      checked={selectedValue === 'a'}
                                      onChange={handleChange}
                                      value="a"
                                      color="default"
                                      name="radio-button"
                                      inputProps={{ 'aria-label': 'a' }}
                                      size="small"
                                  />
                                  <span>Letter - Postnord</span>
                                  <Typography sx={leftMargin}>
                                      3 business days
                                  </Typography>
                              </TableCell>
                              <TableCell sx={paddingLeft}>
                                  <FormControl 
                                      variant="outlined"
                                      sx={formControl}
                                  >
                                      <InputLabel id="select-outlined-label">
                                          Delivery date
                                      </InputLabel>
                                      <Select
                                          labelId="select-outlined-label"
                                          id="select-outlined"
                                          value={DeliveryDate}
  
                                          label="Leveransdatum"
                                      >
                                          <MenuItem sx={menuItemFontSize} value={10}>
                                              Thursday april 8th
                                          </MenuItem>
                                      </Select>
                                  </FormControl>
                              </TableCell>
                              <TableCell sx={paddingLeft}>
                                  0 kr
                              </TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell>
                                  <Radio
                                      checked={selectedValue === 'b'}
                                      onChange={handleChange}
                                      value="b"
                                      color="default"
                                      name="radio-button"
                                      inputProps={{ 'aria-label': 'b' }}
                                      size="small"
                                  />
                                  <span>Express - Postnord</span>
                                  <Typography sx={leftMargin}>
                                      Order before 22.00 will be sent
                                      Sunday-Thursday evening between 17 - 22. Preliminary
                                      delivery tomorrow.
                                  </Typography>
                              </TableCell>
                              <TableCell sx={paddingLeft}>
                                  <FormControl
                                      variant="outlined"
                                      sx={formControl}
                                  >
                                      <InputLabel id="select-outlined-label">
                                          Delivery date
                                      </InputLabel>
                                      <Select
                                          labelId="select-outlined-label"
                                          id="select-outlined"
                                          value={DeliveryDate}
                                          
                                          label="Leveransdatum"
                                      >
                                          <MenuItem sx={menuItemFontSize} value={40}>
                                          Tuesday april 6th
                                          </MenuItem>
                                      </Select>
                                  </FormControl>
                              </TableCell>
                              <TableCell sx={paddingLeft}>
                                  50 kr
                              </TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell>
                                  <Radio
                                      checked={selectedValue === 'c'}
                                      onChange={handleChange}
                                      value="c"
                                      color="default"
                                      name="radio-button"
                                      inputProps={{ 'aria-label': 'c' }}
                                      size="small"
                                  />
                                  <span>Earlybird</span>
                                  <Typography sx={leftMargin}>
                                      <div>2 business days</div>
                                      <div>Delivery before 07:00 to your mailbox,
                                      bigger packages will be left at the door</div>
                                  </Typography>
                              </TableCell>
                              <TableCell sx={paddingLeft}>
                                  <FormControl
                                      variant="outlined"
                                      sx={formControl}
                                  >
                                      <InputLabel id="select-outlined-label">
                                          Delivery date
                                      </InputLabel>
                                      <Select
                                          labelId="select-outlined-label"
                                          id="select-outlined"
                                          value={DeliveryDate}
                                          
                                          label="Leveransdatum"
                                      >
                                          <MenuItem sx={menuItemFontSize} value={3}>
                                          Wednesday april 7th
                                          </MenuItem>
                                      </Select>
                                  </FormControl>
                              </TableCell>
                              <TableCell sx={paddingLeft}>
                                  100 kr
                              </TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell>
                                  <Radio
                                      checked={selectedValue === 'f'}
                                      onChange={handleChange}
                                      value="f"
                                      color="default"
                                      name="radio-button"                                
                                      inputProps={{ 'aria-label': 'f' }}
                                      size="small"
                                  />
                                  <span>Pick up at store</span>
                              </TableCell>
                              <TableCell
                                  sx={paddingLeft}
                              ><Typography sx={leftMargin}>
                              You can pick up your order during opening hours
                          </Typography></TableCell>
                              <TableCell sx={paddingLeft}>
                                  0 kr
                              </TableCell>
                          </TableRow>
                      </TableBody>
                  </Table>
              </TableContainer>
          </Grid>
          <Grid sx={buttonAlign}>
          <Button sx={button}>
            Payment
          </Button>
          </Grid>
      </Card>
  );
};

export default Delivery;

const mainStyle: SxProps = {
  marginBlockStart: '1rem'
}
const table: SxProps = {
  paddingRight: '30rem',
  alignItems: 'center'
}
const leftMargin: SxProps = {
  marginLeft: '2.18rem'
}
const paddingLeft: SxProps = {
  paddingLeft: '1rem'
}
const formControl: SxProps = {
  minWidth: '15rem',
  fontSize: '0.9rem'
}
const menuItemFontSize: SxProps = {
  fontSize: '0.9rem'
}
const cardStyle: SxProps = {
  maxWidth: '60rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '10rem',
  border: '1px solid black'
}
const h1: SxProps = {
  textAlign: 'center'
}
const button: SxProps = {
  backgroundColor: 'black',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#5f5f5f',
    color: '#fff',
  },
}
const buttonAlign: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '1rem',
  paddingBottom: '1rem'
}
