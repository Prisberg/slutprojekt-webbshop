import { Component, createContext } from 'react';
import { ProductInfo } from './mockedData';

interface CartItem extends ProductInfo {
   quantity: number;
   subTotal: number;
   totalSum: number;
}

interface State {
   cart: CartItem[];
   total: number;
   inputInformation: inputInterface [];
}

export interface inputInterface {
   name: string;
   LName: string,
   email: string,
   address: string,
   city: string,
   country: string,
   zip: string,
   tel: string,
}

interface ContextValue extends State {
   addToCart: (product: ProductInfo) => void;
   removeCart: (product: ProductInfo) => void;
   removeItems: (product: ProductInfo) => void;
   subToTal: (cart: CartItem[]) => void;
   removeallpructs: (product: ProductInfo) => void;
   addInputInformation: (inputInfo: inputInterface) => void;
}

export const CartContext = createContext<ContextValue>({
   total: 0,
   cart: [],
   inputInformation: [],
   addToCart: () => { },
   removeCart: () => { },
   removeItems: () => { },
   subToTal: () => { },
   removeallpructs: () => { },
   addInputInformation: () => { },
});

class CartProvider extends Component<{}, State> {
   public state: State = {
      cart: [],
      total: 0,
      inputInformation: [],
   };

   subTotal = (cart: CartItem[]) => {
      let totalup = 0;
      cart.forEach((element) => {
         totalup += element.subTotal;
      });
      this.setState({ total: totalup });
   };

   removeOneitem = (product: ProductInfo) => {
      let updatedCart = [...this.state.cart];

      const removeOne = updatedCart.find((item) => item.id === product.id);

      if (removeOne) {
         removeOne.quantity--;
         removeOne.subTotal -= removeOne.price;
         removeOne.totalSum -= removeOne.price;
         if (removeOne.quantity <= 0) {
            this.removeTocart(product);
         } else {
            this.setState({ cart: updatedCart });
            this.subTotal(updatedCart);
         }
      }
   };

   removeTocart = (product: ProductInfo) => {
      const removeItems: CartItem[] = this.state.cart.filter(
         (item) => item.id !== product.id,
      );

      this.setState({ cart: [...removeItems] });
      this.subTotal(removeItems);
   };

   removeallpructs = () => {
      this.setState({ cart: [] })
      this.subTotal([])
   };

   addProductToCart = (product: ProductInfo) => {
      let updatedCart = [...this.state.cart];

      const itemInCart = updatedCart.find((item) => item.id === product.id);

      if (itemInCart) {
         itemInCart.quantity++;
         itemInCart.subTotal += itemInCart.price;
         itemInCart.totalSum += itemInCart.price;
      } else {
         updatedCart = [
            ...updatedCart,
            {
               ...product,
               quantity: 1,
               subTotal: product.price,
               totalSum: product.price,
            },
         ];
      }
      this.setState({ cart: updatedCart });
      this.subTotal(updatedCart);
   };

   addInputInformation = (inputInfo: inputInterface) => {
      let updatedInputInformation = [...this.state.inputInformation];
      const currentInput = updatedInputInformation.push(inputInfo);
      this.setState({ inputInformation: updatedInputInformation });
   };

   render() {
      return (
         <CartContext.Provider
            value={{
               total: this.state.total,
               cart: this.state.cart,
               inputInformation: this.state.inputInformation,
               removeallpructs: this.removeallpructs,
               addToCart: this.addProductToCart,
               removeCart: this.removeTocart,
               removeItems: this.removeOneitem,
               subToTal: this.subTotal,
               addInputInformation: this.addInputInformation,
            }}
         >
            {this.props.children}
         </CartContext.Provider>
      );
   }
}

export default CartProvider;


