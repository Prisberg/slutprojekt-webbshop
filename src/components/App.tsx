import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Context';
import '../App.css'
import Layout from './Layout';



function App() {

  return (
    <div>
      <CartProvider>
      <Layout/>
      </CartProvider>
    </div>
    
  );
}

export default App;
