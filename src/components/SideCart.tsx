import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function SideCart() {
    let drawerWidth
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    if (!open) {
        drawerWidth = '0%'
    } else {
        drawerWidth = '100%'
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                zIndex: 2
            }}>
            {/* navbar knappen */}
            <Toolbar>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...(open && { display: 'none' }) }}
                >
                    <ShoppingBagIcon
                        sx={{
                            zIndex: 1,
                            fontSize: '3rem',
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            height: '100%',
                            zIndex: 1,
                            display: { xs: 'none', sm: 'inline-block' }
                        }}>
                        View your selections
                    </Typography>
                </IconButton>
            </Toolbar>
            {/* navbar knappen */}

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
                        <CloseIcon
                            sx={{
                                fontSize: '3rem',
                                color: 'black'
                            }}
                        />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {/* pris ellr prudkter */}
                </List>
                <Divider />
                <List>

                </List>
                <Link to={'checkout'}
                    style={{
                        textDecoration: 'none',
                        alignSelf: 'center',
                    }}>
                    <Button
                        sx={{
                            backgroundColor: '#3665DD',
                            width: 200,
                        }}>
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: '2rem'
                            }}>
                            Checkout
                        </Typography>
                    </Button>
                </Link>
            </Drawer>
        </Box>
    );
}