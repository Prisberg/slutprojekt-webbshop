import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Delivery from "./Delivery";
import Navbar from "./Navbar";
import ProductInfo from "./ProductInfo";
import Products from "./productsPage";
import { Box, createTheme, SxProps, ThemeProvider } from "@mui/material";
import background from '../assets/images/nav-background.jpg'
import Payment from "./Payment";
import Overview from "./OrderOverview";
import Confirmation from "./OrderConfirmation";



function Layout() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Cormorant SC',
        'serif',
      ].join(','),
    },});

  return (
    <div>
      <Box
        component="img"
        alt="background"
        src={background}
        sx={boxStyle}
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="product-info/:id" element={<ProductInfo />} />
          <Route path="checkout" element={<Overview />} />
          <Route path="checkout/adress" element={<Checkout />} />
          <Route path="checkout/delivery" element={<Delivery />} />
          <Route path="checkout/payment" element={<Payment setPaymentModal={undefined} />} />
          <Route path="checkout/confirmation" element={<Confirmation />} />
          <Route
            path="*"
            element={
              <Box sx={{ marginTop: "10rem", color: { xs: 'white', sm: 'black' } }}>
                There's nothing here!
              </Box>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const boxStyle: SxProps = {
  marginBottom: 100,
  padding: 0,
  height: '100%',
  position: 'fixed',
  zIndex: -1,
  objectFit: 'cover',
  display: { xs: 'block', sm: 'none' }
}

export default Layout;
