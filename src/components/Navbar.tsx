import { AppBar, Typography, Box, Paper, Toolbar, IconButton, createTheme, Button } from "@mui/material";
import logo from '../assets/images/logo.png'
import background from '../assets/images/nav-background.jpg'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SideCart from "./SideCart";
import { Link, Outlet } from "react-router-dom";

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
            <Link to=''
               style={{
                  textDecoration: 'none',
                  flexGrow: 1,
               }}>
               <Button
                  sx={{
                     margin: '1rem',
                     zIndex: 1,
                     height: 60,
                  }}>
                  <Box
                     component="img"
                     alt="logo"
                     src={logo}
                     sx={{
                        height: 60,
                        display: { xs: 'none', md: 'inline-block' }
                     }}
                  />
                  <Typography variant="h3" component='div'
                     sx={{
                        height: '100%',
                        color: 'white'
                     }}>
                     TIC TOC
                  </Typography>
               </Button>
            </Link>
            <SideCart />
         </Toolbar>
         <Outlet />
      </AppBar >
   );
}

export default Navbar;