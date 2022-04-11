import * as React from 'react';
import { Card, Grid, Radio, SxProps, Table, TableBody, TableCell, TableContainer, TableRow, Typography, Button, createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { shipping } from '../mockedData'
import { useContext, useState } from 'react';
import { CartContext } from './Context';



function Delivery() {
    const navigate = useNavigate();
    const { storeShippingInformation } = useContext(CartContext);
    const [selectedValue, setSelectedValue] = useState('a');

    /*     const deliveryDates = (shipping: shippingInterface) => {
            let date = new Date();
            shipping.deliveryDate
        }
     */

    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleProceed = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        navigate('/checkout/payment');


        const filteredShipping: any = shipping.filter((item) => {
            return item.id === selectedValue;
        })
        storeShippingInformation(filteredShipping);
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
            <form
                onSubmit={handleProceed}
            >
                <Box sx={boxStyle}>
                    <Typography
                        variant='h3'
                        sx={h1}>
                        Shipping options
                    </Typography>
                    <Grid sx={mainStyle}>
                        <TableContainer>
                            <Table sx={table} aria-label="simple table">
                                <TableBody>
                                    {shipping.map((shipping) => (
                                        <TableRow key={shipping.id}>
                                            <TableCell sx={flexColumn}>
                                                <Box sx={spaceBetween}>
                                                    <Box sx={flexRow}>
                                                        <Radio
                                                            checked={selectedValue === `${shipping.id}`}
                                                            onChange={handleChangeRadio}
                                                            value={`${shipping.id}`}
                                                            color="default"
                                                            name="radio-button"
                                                            inputProps={{ 'aria-label': `${shipping.id}` }}
                                                            size="small"
                                                        />
                                                        <Typography>
                                                            {shipping.shippingType}
                                                        </Typography>
                                                    </Box>
                                                    <Typography>
                                                        {shipping.shippingCost} kr
                                                    </Typography>
                                                </Box>
                                                <Typography sx={leftMargin}>
                                                    {shipping.shippingDescription}
                                                </Typography>
                                                <Typography sx={leftMargin}>
                                                    {shipping.deliveryDate}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid sx={buttonAlign}>
                        <Button
                            type='submit'
                            sx={button}>
                            Proceed
                        </Button>
                    </Grid>
                </Box>
            </form>
        </Card >
        </ThemeProvider>
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
    marginLeft: '2.18rem',
    minWidth: '15rem',
}
const paddingLeft: SxProps = {
    paddingLeft: '1rem'
}
/* const formControl: SxProps = {
    maxWidth: { xs: '9rem', md: '15rem' },
    fontSize: '0.9rem',
} */
const menuItemFontSize: SxProps = {
    fontSize: '0.9rem'
}
const flexColumn: SxProps = {
    display: 'flex',
    flexDirection: 'column',
}
const flexRow: SxProps = {
    display: 'flex',
    flexDirection: 'row',
}
const cardStyle: SxProps = {
    paddingTop: '10rem',
    backgroundColor: 'rgba(0,0,0,0)',
    maxWidth: '60rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid black'
}
const boxStyle: SxProps = {
    background: 'white',
    padding: '1rem',
}
const spaceBetween: SxProps = {
    display: 'flex',
    justifyContent: 'space-between'
}
const h1: SxProps = {
    textAlign: 'center',
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
