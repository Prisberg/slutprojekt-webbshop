import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Navbar from "./Navbar";
import ProductInfo from "./ProductInfo";
import Products from "./productsPage";
import SideCart from "./SideCart";

function Layout() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="product-info/:id" element={<ProductInfo />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="*"
            element={
              <Box sx={{ marginTop: "10rem" }}>
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
