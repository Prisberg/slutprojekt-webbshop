import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Navbar from "./Navbar";
import ProductInfo from "./ProductInfo";
import Products from "./productsPage";
import { Box } from "@mui/material";
import background from '../assets/images/nav-background.jpg'

function Layout() {
  return (
    <div>
      <Box
        component="img"
        alt="background"
        src={background}
        sx={{
          marginBottom: 100,
          padding: 0,
          height: '100%',
          position: 'fixed',
          zIndex: -1,
          objectFit: 'cover',
          display: { xs: 'block', sm: 'none' }
        }}
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="product-info" element={<ProductInfo />} />
          <Route path="checkout" element={<Checkout />} />
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

export default Layout;
