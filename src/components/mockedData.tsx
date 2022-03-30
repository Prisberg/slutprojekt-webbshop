import Submariner from "../assets/images/SubmarinerGreen.jpg";
import SubmarinerBlue from "../assets/images/Rolex-submariner.jpeg";
import Oyster from "../assets/images/oyster.jpg"
import Explorer from "../assets/images/Explorer.jpg";
import Datejust from "../assets/images/Datejust.jpg";
import Daydate from "../assets/images/daydate.jpg";

export interface ProductInfo {
    id: number;
    model: string;
    maker: string;
    describtion: string;
    price: number;
    image: string;
    inDepth: string;
}

export type Props = {
    productType: ProductInfo;
}

export const products: ProductInfo[] = [
    {
        id: 0,
        model: 'Submariner-G',
        maker: 'Rolex',
        describtion: 'Green',
        price: 100000,
        image: Submariner,
        inDepth: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, erat quis scelerisque laoreet, ligula leo maximus lacus, eu fringilla magna diam dignissim arcu. Phasellus est est, dignissim fermentum urna vel, mollis tincidunt lectus. Morbi in turpis quis arcu luctus posuere sit amet at leo. Nulla facilisi. Curabitur dui urna, feugiat id metus eu, consequat accumsan orci. Nulla facilisi. Fusce lobortis magna nec elit semper, tincidunt rhoncus diam gravida. In elementum, turpis eget tempus accumsan, urna dui vestibulum libero, a consequat enim justo ut leo. Maecenas erat neque, luctus quis odio consectetur, vestibulum sollicitudin justo. Proin aliquet quis purus sit amet vestibulum. Duis cursus gravida felis eget pretium. Quisque vitae suscipit nibh, eu tristique ligula. Donec vehicula varius dolor, nec lacinia ipsum efficitur non. Sed ultricies nibh tincidunt lectus rutrum, eu finibus ipsum facilisis. Duis consequat dui et efficitur luctus. Aliquam massa nunc, egestas et dui vitae, sodales fringilla elit.',
    },
    {
        id: 1,
        model: 'Submariner-B',
        maker: 'Rolex',
        describtion: 'Blue',
        price: 150000,
        image: SubmarinerBlue,
        inDepth: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, erat quis laoreet, ligula leo maximus lacus, eu fringilla magna diam dignissim arcu. Phasellus est est, dignissim fermentum urna vel, mollis tincidunt lectus. Morbi in turpis quis arcu luctus posuere sit amet at leo. Nulla facilisi. Curabitur dui urna, feugiat id metus eu, consequat accumsan orci. Nulla facilisi. Fusce lobortis magna nec elit semper, tincidunt rhoncus diam gravida. In elementum, turpis eget tempus accumsan, urna dui vestibulum libero, a consequat enim justo ut leo. Maecenas erat neque, luctus quis odio consectetur, vestibulum sollicitudin justo. Proin aliquet quis purus sit amet vestibulum. Duis cursus gravida felis eget pretium. Quisque vitae suscipit nibh, eu tristique ligula. Donec vehicula varius dolor, nec lacinia ipsum efficitur non. Sed ultricies nibh tincidunt lectus rutrum, eu finibus ipsum facilisis. Duis consequat dui et efficitur luctus. Aliquam massa nunc, egestas et dui vitae, sodales fringilla elit.',
    },
    {
        id: 2,
        model: 'Oyster',
        maker: 'Rolex',
        describtion: 'Silver',
        price: 120000,
        image: Oyster,
        inDepth: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, erat scelerisque laoreet, ligula leo maximus lacus, eu fringilla magna diam dignissim arcu. Phasellus est est, dignissim fermentum urna vel, mollis tincidunt lectus. Morbi in turpis quis arcu luctus posuere sit amet at leo. Nulla facilisi. Curabitur dui urna, feugiat id metus eu, consequat accumsan orci. Nulla facilisi. Fusce lobortis magna nec elit semper, tincidunt rhoncus diam gravida. In elementum, turpis eget tempus accumsan, urna dui vestibulum libero, a consequat enim justo ut leo. Maecenas erat neque, luctus quis odio consectetur, vestibulum sollicitudin justo. Proin aliquet quis purus sit amet vestibulum. Duis cursus gravida felis eget pretium. Quisque vitae suscipit nibh, eu tristique ligula. Donec vehicula varius dolor, nec lacinia ipsum efficitur non. Sed ultricies nibh tincidunt lectus rutrum, eu finibus ipsum facilisis. Duis consequat dui et efficitur luctus. Aliquam massa nunc, egestas et dui vitae, sodales fringilla elit.',
    },
    {
        id: 3,
        model: 'Explorer',
        maker: 'Rolex',
        describtion: 'Black',
        price: 170000,
        image: Explorer,
        inDepth: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie, quis scelerisque laoreet, ligula leo maximus lacus, eu fringilla magna diam dignissim arcu. Phasellus est est, dignissim fermentum urna vel, mollis tincidunt lectus. Morbi in turpis quis arcu luctus posuere sit amet at leo. Nulla facilisi. Curabitur dui urna, feugiat id metus eu, consequat accumsan orci. Nulla facilisi. Fusce lobortis magna nec elit semper, tincidunt rhoncus diam gravida. In elementum, turpis eget tempus accumsan, urna dui vestibulum libero, a consequat enim justo ut leo. Maecenas erat neque, luctus quis odio consectetur, vestibulum sollicitudin justo. Proin aliquet quis purus sit amet vestibulum. Duis cursus gravida felis eget pretium. Quisque vitae suscipit nibh, eu tristique ligula. Donec vehicula varius dolor, nec lacinia ipsum efficitur non. Sed ultricies nibh tincidunt lectus rutrum, eu finibus ipsum facilisis. Duis consequat dui et efficitur luctus. Aliquam massa nunc, egestas et dui vitae, sodales fringilla elit.',
    },
    {
        id: 4,
        model: 'Datejust',
        maker: 'Rolex',
        describtion: 'Green',
        price: 160000,
        image: Datejust,
        inDepth: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, erat quis scelerisque laoreet, ligula leo maximus lacus, eu fringilla magna diam dignissim arcu. Phasellus est est, dignissim fermentum urna vel, mollis tincidunt lectus. Morbi in turpis quis arcu luctus posuere sit amet at leo. Nulla facilisi. Curabitur dui urna, feugiat id metus eu, consequat accumsan orci. Nulla facilisi. Fusce lobortis magna nec elit semper, tincidunt rhoncus diam gravida. In elementum, turpis eget tempus accumsan, urna dui vestibulum libero, a consequat enim justo ut leo. Maecenas erat neque, luctus quis odio consectetur, vestibulum sollicitudin justo. Proin aliquet quis purus sit amet vestibulum. Duis cursus gravida felis eget pretium. Quisque vitae suscipit nibh, eu tristique ligula. Donec vehicula varius dolor, nec lacinia ipsum efficitur non. Sed ultricies nibh tincidunt lectus rutrum, eu finibus ipsum facilisis. Duis consequat dui et efficitur luctus. Aliquam massa nunc, egestas et dui vitae, sodales fringilla elit.',
    },
    {
        id: 5,
        model: 'Day-Date',
        maker: 'Rolex',
        describtion: 'Gold',
        price: 175000,
        image: Daydate,
        inDepth: 'Lorem ipsum dolor sit amet, consectetur elit. Nunc molestie, erat quis scelerisque laoreet, ligula leo maximus lacus, eu fringilla magna diam dignissim arcu. Phasellus est est, dignissim fermentum urna vel, mollis tincidunt lectus. Morbi in turpis quis arcu luctus posuere sit amet at leo. Nulla facilisi. Curabitur dui urna, feugiat id metus eu, consequat accumsan orci. Nulla facilisi. Fusce lobortis magna nec elit semper, tincidunt rhoncus diam gravida. In elementum, turpis eget tempus accumsan, urna dui vestibulum libero, a consequat enim justo ut leo. Maecenas erat neque, luctus quis odio consectetur, vestibulum sollicitudin justo. Proin aliquet quis purus sit amet vestibulum. Duis cursus gravida felis eget pretium. Quisque vitae suscipit nibh, eu tristique ligula. Donec vehicula varius dolor, nec lacinia ipsum efficitur non. Sed ultricies nibh tincidunt lectus rutrum, eu finibus ipsum facilisis. Duis consequat dui et efficitur luctus. Aliquam massa nunc, egestas et dui vitae, sodales fringilla elit.',
    },
]

export interface shippingInterface {
    id: string;
    shippingType: string;
    shippingDescription: string;
    shippingCost: number;
    deliveryDate: string;
}

 export type shippingProps = {
    shippingType: shippingInterface;
}

export const shipping: shippingInterface[] = [
    {
        id: 'a',
        shippingType: 'Letter - Postnord',
        shippingDescription: '3 business days',
        shippingCost: 0,
        deliveryDate: 'Thursday April 8th',
    },
    {
        id: 'b',
        shippingType: 'Express - Postnord',
        shippingDescription: 'Order before 22.00 will be sent Sunday-Thursday evening between 17 - 22. Preliminary delivery tomorrow.', 
        shippingCost: 50,
        deliveryDate: 'Thursday April 8th',
    },
    {
        id: 'c',
        shippingType: 'Earlybird',
        shippingDescription: '2 business days Delivery before 07:00 to your mailbox, bigger packages will be left at the door', 
        shippingCost: 100,
        deliveryDate: 'Thursday April 8th',
    },
    {
        id: 'd',
        shippingType: 'Pick up at store',
        shippingDescription: 'You can pick up your order during opening hours', 
        shippingCost: 0,
        deliveryDate: 'Thursday April 8th',
    },
]
