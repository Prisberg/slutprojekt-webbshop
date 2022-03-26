import * as React from 'react';
import { styled, SxProps, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Button, ButtonGroup, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from './Context';
import { useContext } from 'react';


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
interface Props {

}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const SideCart: React.FC<Props> = () => {

    const { cart, addToCart, removeCart, removeItems, total } = useContext(CartContext);
    const [quantity] = React.useState('');

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    let drawerWidth

    if (!open) {
        drawerWidth = '0%'
    } else {
        drawerWidth = '100%'
    }

    return (
        <React.Fragment>
            <Box
                sx={boxStyling}>
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <ShoppingBagIcon sx={{ zIndex: 1, fontSize: '3rem', }} />
                        <Typography
                            variant="h6"
                            sx={headerSix}>
                            View your selections
                        </Typography>
                    </IconButton>
                </Toolbar>
                <Drawer
                    sx={{
                        zIndex: 2,
                        position: 'absolute',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: { xs: drawerWidth, sm: '40%', md: '30%' }
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            <CloseIcon sx={iconStyle} />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <Table>
                        <TableBody>
                            {cart.map((product) => (
                                <TableRow key={product.name}>
                                    <TableCell>
                                        <img src={product.image}

                                            height="100" />
                                    </TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.price} kr</TableCell>
                                    <TableCell>
                                        <ButtonGroup sx={{
                                        }}
                                        >
                                            <Button sx={{
                                                height: '3rem'
                                            }}
                                                onClick={() => {
                                                    removeItems(product);
                                                }}
                                            >
                                                -
                                            </Button>
                                            <TextField
                                                variant="outlined"
                                                id={quantity}
                                                value={product.quantity}
                                            />
                                            <Button
                                                sx={{
                                                    height: '3rem'
                                                }}
                                                onClick={() => {
                                                    addToCart(product);
                                                }}
                                            >
                                                +
                                            </Button>
                                        </ButtonGroup>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{product.subTotal} kr </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell>{total}kr</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Link to={'checkout'} style={linkStyle}>
                        <Button
                            sx={{
                                backgroundColor: '#3665DD',
                                width: 200,
                            }}>
                            <Typography sx={checkoutStyle}>
                                Checkout
                            </Typography>
                        </Button>
                    </Link>
                </Drawer>
            </Box >
        </React.Fragment>
    );
}

export default SideCart;

const boxStyling: SxProps = {
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 2
}
const headerSix: SxProps = {
    height: '100%',
    zIndex: 1,
    display: { xs: 'none', sm: 'inline-block' }
}
const iconStyle: SxProps = {
    fontSize: '3rem',
    color: 'black'
}
const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    alignSelf: 'center',
}
const checkoutStyle: SxProps = {
    color: 'white',
    fontSize: '2rem'
}