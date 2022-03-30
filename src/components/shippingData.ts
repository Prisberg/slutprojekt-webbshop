export interface ShippingProvider {
    providerName: string;
    cost: number;
    deliveryTime: string;
  }
  
  export const shippingProvider: ShippingProvider[] = [
    {
      providerName: "Postnord",
      cost: 495,
      deliveryTime: "3-5 Weekdays",
    },
    {
      providerName: "DHL",
      cost: 345,
      deliveryTime: "5-7 Weekdays",
    },
    {
      providerName: "Pick up at terminal",
      cost: 0,
      deliveryTime: "2-4 Weekdays",
    },
  ];