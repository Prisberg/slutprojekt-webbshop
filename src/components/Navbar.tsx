import { AppBar, Typography, Box, Paper, Toolbar, IconButton, createTheme } from "@mui/material";
import logo from '../assets/images/logo.png'
import background from '../assets/images/nav-background.jpg'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Navbar() {
   return (
      <div>
         <AppBar position="absolute"
            sx={{
               maxHeight: 115,
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
                  display: {xs: 'none', sm: 'inline-block'}
               }}
            />
            <Toolbar>
               <Box
                  component="img"
                  alt="logo"
                  src={logo}
                  sx={{
                     zIndex: 1,
                     height: 60,
                     margin: '1rem',
                     display: {xs: 'none', md: 'inline-block'}
                  }}
               />
               <Typography variant="h3" component='div'
                  sx={{
                     height: '100%',
                     zIndex: 1,
                     flexGrow: 1,
                  }}>
                  TIC TOC
               </Typography>
               <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="cart"
               >
                  <ShoppingBagIcon
                     sx={{
                        zIndex: 1,
                        fontSize: '3rem',
                     }}
                  />
               </IconButton>
               <Typography
                  variant="h6"
                  sx={{
                     height: '100%',
                     zIndex: 1,
                     display: {xs: 'none', sm: 'inline-block'}
                  }}>
                  View your selections
               </Typography>
            </Toolbar>
         </AppBar>
      </div >
   );
}

export default Navbar;