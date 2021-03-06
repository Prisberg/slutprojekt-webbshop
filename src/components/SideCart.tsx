import * as React from 'react';
import { styled, SxProps, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from './Context';
import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import WatchOffIcon from '@mui/icons-material/WatchOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



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

    let cartLength = 0;

    cart.forEach((CartItem) => {
        cartLength = cartLength + CartItem.quantity;
    });

    return (
        <React.Fragment>
            <Box sx={boxStyling}>
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{
                            ...(open && { display: 'none' })
                        }}
                    >
                        <Badge
                            color="error"
                            badgeContent={cartLength}
                            showZero
                        >
                            <ShoppingBagIcon sx={{ zIndex: 1, fontSize: '3rem', }} />
                        </Badge>
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
                            width: { xs: drawerWidth, sm: '60%', md: '40%', lg: '35%' }
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
                        <TableBody >
                            {cart.length === 0 ?
                                <TableRow>
                                    <TableCell>
                                        <Typography>No watch in your cart
                                            <WatchOffIcon />
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                : null}
                            {cart.map((product) => (
                                <TableRow sx={cartstyling} key={product.model}>
                                    <TableCell>
                                        <img src={product.image}
                                            height="100" />
                                    </TableCell>

                                    <TableCell sx={padding}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', maxWidth: '15rem', margin: '1rem' }}>
                                            <Typography>{product.model} | {product.price} kr</Typography>
                                        </Box>
                                        <Box sx={{ outline: 'solid', display: 'flex', width: '11rem', borderRadius: '1rem', justifyContent: 'space-evenly' }}>
                                            <Button
                                                sx={button}
                                                onClick={() => {
                                                    addToCart(product);
                                                }}
                                            >
                                                +
                                            </Button>
                                            <Box sx={{
                                                maxWidth: 40,
                                                height: 36,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                fontSize: '2rem',
                                            }}>
                                                {product.quantity}
                                            </Box>
                                            <Button
                                                sx={button}
                                                onClick={() => {
                                                    removeItems(product);
                                                }}
                                            >
                                                -
                                            </Button>
                                        </Box>

                                        <DeleteForeverIcon
                                            sx={icon}
                                            onClick={() => {
                                                removeCart(product);
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                {cart.length === 0 ?
                                    null : <TableCell>Total: {total}kr</TableCell>}
                            </TableRow>
                        </TableBody>
                    </Table>
                    {cart.length === 0 ?
                        null : <Link to={'checkout'} style={linkStyle}>
                            <Button
                                sx={checkoutButton}
                                onClick={handleDrawerClose}
                            >
                                <Typography sx={checkoutStyle}>
                                    Checkout
                                </Typography>
                            </Button>
                        </Link>}
                </Drawer>
            </Box >
        </React.Fragment>
    );
}

export default SideCart;

const checkoutButton: SxProps = {
    backgroundColor: 'black',
    margin: '1rem',
    width: 200,
    color: 'white',
    '&:hover': {
        backgroundColor: '#5f5f5f',
        color: '#fff',
    }
}
const boxStyling: SxProps = {
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 2,
    padding: '0rem'
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
const button: SxProps = {
    color: 'black',
    fontWeight: 'bold'
}
const icon: SxProps = {
    margin: '1rem',
    cursor: 'pointer',
    color: 'black',
    '&:hover': {
        color: 'red',
    }
}
const cartstyling: SxProps = {
    padding: '0rem',
    marginLeft: '2rem',
}
const padding: SxProps = {
    padding: '0rem'
}