import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Delivery from "./Delivery";
import Navbar from "./Navbar";
import ProductInfo from "./ProductInfo";
import Products from "./productsPage";
import { Box, SxProps } from "@mui/material";
import background from '../assets/images/nav-background.jpg'


function Layout() {
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
          <Route path="product-info" element={<ProductInfo />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/delivery" element={<Delivery />} />
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
