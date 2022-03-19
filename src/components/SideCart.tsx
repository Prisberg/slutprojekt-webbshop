import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

let drawerWidth

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
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    if (!open) {
        drawerWidth = 0;
    } else {
        drawerWidth = 240;
    }

    return (
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            zIndex: 2
        }}>
            {/* navbar knappen */}
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
                     display: {xs: 'none', sm: 'inline-block'}
                  }}>
                  View your selections
               </Typography>
            </IconButton>
            {/* navbar knappen */}

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                     {/* pris ellr prudkter */}
                </List>
                <Divider />
                <List>
                   {/* pris ellr prudkter */}
                </List>
            </Drawer>
        </Box>
    );
}