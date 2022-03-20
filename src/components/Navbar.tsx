import { AppBar, Typography, Box, Paper, Toolbar, IconButton, createTheme } from "@mui/material";
import logo from '../assets/images/logo.png'
import background from '../assets/images/nav-background.jpg'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SideCart from "./SideCart";

function Navbar() {
   return (
      <AppBar position="absolute"
         sx={{
            maxHeight: 115,
            backgroundColor: 'rgba(0,0,0,0)',
         }}>
         <Box
            component="img"
            alt="background"
            src={background}
            sx={{
               position: 'absolute',
               height: '100%',
               width: '100%',
               objectFit: 'cover',
               display: { xs: 'none', sm: 'block' }
            }}
         />
         <Toolbar sx={{
            minHeight: 75,
         }}>
            <Box
               component="img"
               alt="logo"
               src={logo}
               sx={{
                  zIndex: 1,
                  height: 60,
                  margin: '1rem',
                  display: { xs: 'none', md: 'inline-block' }
               }}
            />
            <Typography variant="h3" component='div'
               sx={{
                  height: '100%',
                  zIndex: 1,
                  flexGrow: 1,
                  minWidth: 250
               }}>
               TIC TOC
            </Typography>
            <SideCart />
         </Toolbar>
      </AppBar>
   );
}

export default Navbar;