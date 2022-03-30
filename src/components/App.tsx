import { AppBar, Typography } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Context';
import '../App.css'
import Layout from './Layout';
import UserProvider from './ApiContext';



function App() {
  return (
    <div>
      <CartProvider>
        <UserProvider>
      <Layout/>
      </UserProvider>
      </CartProvider>
    </div>
  );
}

export default App;
