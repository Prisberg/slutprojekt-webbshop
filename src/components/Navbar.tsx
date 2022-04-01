import { AppBar, Typography, Box, Paper, Toolbar, IconButton, createTheme, Button, SxProps } from "@mui/material";
import logo from '../assets/images/logo.png'
import background from '../assets/images/nav-background.jpg'
import SideCart from "./SideCart";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from '@emotion/react';

function Navbar() {
   const location = useLocation();
   console.log(location.pathname)

   const theme = createTheme({
      typography: {
        fontFamily: [
          'Cormorant SC',
          'serif',
        ].join(','),
      },});

   return (
      <ThemeProvider theme={theme}>
      <AppBar position="absolute" sx={appbarStyle}>
         <Box
            component="img"
            alt="background"
            src={background}
            sx={backgroundImage}
         />
         <Toolbar sx={toolbarStyle}>
            <Link to='' style={{ textDecoration: 'none', }} >
               <Button sx={buttonStyle}>
                  <Box
                     component="img"
                     alt="logo"
                     src={logo}
                     sx={boxStyle}
                  />
                  <Typography
                     variant="h3"
                     component='div'
                     sx={typographyStyle}
                  >
                     TIC TOC
                  </Typography>
               </Button>
            </Link>
            {<SideCart />}
         </Toolbar>
         <Outlet />
      </AppBar >
      </ThemeProvider>
   );
}

export default Navbar;

const typographyStyle: SxProps = {
   height: '100%',
   color: 'white',
   minWidth: 191
}
const boxStyle: SxProps = {
   height: 60,
   display: { xs: 'none', md: 'inline-block' }
}
const buttonStyle: SxProps = {
   margin: '1rem',
   zIndex: 1,
   height: 60,
}
const appbarStyle: SxProps = {
   maxHeight: 115,
   backgroundColor: 'rgba(0,0,0,0)',
}
const toolbarStyle: SxProps = {
   minHeight: 75,
   display: 'flex',
   justifyContent: 'space-between'
}
const backgroundImage: SxProps = {
   position: 'absolute',
   height: '100%',
   width: '100%',
   objectFit: 'cover',
   display: { xs: 'none', sm: 'block' }
}