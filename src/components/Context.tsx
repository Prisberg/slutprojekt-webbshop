import { Component, createContext } from 'react';
import { ProductInfo, shippingInterface } from '../mockedData';

export interface CartItem extends ProductInfo {
   quantity: number;
   subTotal: number;
   totalSum: number;
}

interface State {
   cart: CartItem[];
   total: number;
   addressInformation: AddressInterface[];
   shippingInformation: shippingInterface[];
   paymentInformation: paymentInterface[];
}

export type inputProp = {
   addressType: AddressInterface;
}

export interface AddressInterface {
   name: string;
   LName: string,
   email: string,
   address: string,
   city: string,
   country: string,
   zip: string,
   tel: string,
}

export interface paymentInterface {
   name: string;
   cardNumber: string,
   expires: string,
   CVV: string,
   tel: string,
   ssn: string,
}

interface ContextValue extends State {
   addToCart: (product: ProductInfo) => void;
   removeCart: (product: ProductInfo) => void;
   removeItems: (product: ProductInfo) => void;
   subToTal: (cart: CartItem[]) => void;
   removeallpructs: () => void;
   storeAddressInformation: (inputInfo: AddressInterface) => void;
   storeShippingInformation: (shippingInfo: shippingInterface) => void;
   storePaymentInformation: (paymentInfo: paymentInterface) => void;
}

export const CartContext = createContext<ContextValue>({
   total: 0,
   cart: [],
   addressInformation: [],
   shippingInformation: [],
   paymentInformation: [],
   addToCart: () => { },
   removeCart: () => { },
   removeItems: () => { },
   subToTal: () => { },
   removeallpructs: () => { },
   storeAddressInformation: () => { },
   storeShippingInformation: () => { },
   storePaymentInformation: () => { },
});

class CartProvider extends Component<{}, State> {
   public state: State = {
      cart: [],
      total: 0,
      addressInformation: [],
      shippingInformation: [],
      paymentInformation: [],
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

   storeAddressInformation = (inputInfo: AddressInterface) => {
      let updatedaddressInformation = [...this.state.addressInformation];
      const currentInput = updatedaddressInformation.push(inputInfo);
      this.setState({ addressInformation: updatedaddressInformation });
   };

   storeShippingInformation = (shippingInfo: shippingInterface) => {
      let updatedShippingInformation = [...this.state.shippingInformation];
      const currentInput = updatedShippingInformation.push(shippingInfo);
      this.setState({ shippingInformation: updatedShippingInformation });
   };

   storePaymentInformation = (paymentInfo: paymentInterface) => {
      let updatedPaymentInformation = [...this.state.paymentInformation];
      const currentInput = updatedPaymentInformation.push(paymentInfo);
      this.setState({ paymentInformation: updatedPaymentInformation });
   };

   render() {
      return (
         <CartContext.Provider
            value={{
               total: this.state.total,
               cart: this.state.cart,
               addressInformation: this.state.addressInformation,
               shippingInformation: this.state.shippingInformation,
               paymentInformation: this.state.paymentInformation,
               removeallpructs: this.removeallpructs,
               addToCart: this.addProductToCart,
               removeCart: this.removeTocart,
               removeItems: this.removeOneitem,
               subToTal: this.subTotal,
               storeAddressInformation: this.storeAddressInformation,
               storeShippingInformation: this.storeShippingInformation,
               storePaymentInformation: this.storePaymentInformation,
            }}
         >
            {this.props.children}
         </CartContext.Provider>
      );
   }
}

export default CartProvider;


