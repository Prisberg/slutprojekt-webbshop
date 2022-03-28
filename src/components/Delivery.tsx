import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card, Grid, Radio, SxProps, Table, TableBody, TableCell, TableContainer, TableRow, Typography, Button } from '@mui/material';
import { Box, spacing } from '@mui/system';
import { Link } from 'react-router-dom';
import { shipping } from '../components/mockedData'

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
                                                        onChange={handleChange}
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
                                                        {shipping.deliveryDate}
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid sx={buttonAlign}>
                    <Link to={'/checkout/payment'} style={{ textDecoration: 'none' }}>
                        <Button sx={button}>
                            Proceed
                        </Button>
                    </Link>
                </Grid>
            </Box>
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
    marginLeft: '2.18rem',
    minWidth: '15rem',
}
const paddingLeft: SxProps = {
    paddingLeft: '1rem'
}
const formControl: SxProps = {
    maxWidth: { xs: '9rem', md: '15rem' },
    fontSize: '0.9rem',
}
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
