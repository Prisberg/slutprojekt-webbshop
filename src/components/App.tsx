import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Context';
import '../App.css'
import Layout from './Layout';
import KeyProvider from './ApiContext';



function App() {

  return (
    <div>
      
      <CartProvider>
        <KeyProvider>
      <Layout/>
      </KeyProvider>
      </CartProvider>
    </div>
    
  );
}

export default App;
