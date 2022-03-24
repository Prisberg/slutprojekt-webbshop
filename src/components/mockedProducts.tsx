import Submariner from "../assets/images/SubmarinerGreen.jpg";
import SubmarinerBlue from "../assets/images/Rolex-submariner.jpeg";
import AirKing from "../assets/images/air-king.jpg";

export interface ProductInfo {
    id: number;
    name: string;
    model: string;
    describtion: string;
    price: string;
    image: string;
}

export const products: ProductInfo[] = [
    { id: 0, name: 'Rolex', model: 'Submariner' ,describtion: 'Green', price: '100 000 kr', image: Submariner }, 
    { id: 1, name: 'Rolex', model: 'Submariner' ,describtion: 'Blue', price: '100 000 kr', image: SubmarinerBlue },
    { id: 2, name: 'Rolex', model: 'Air-King' ,describtion: 'Silver', price: '100 000 kr', image: AirKing },
    { id: 3, name: 'Rolex', model: 'Submariner' ,describtion: 'Green', price: '100 000 kr', image: Submariner }, 
    { id: 4, name: 'Rolex', model: 'Submariner' ,describtion: 'Blue', price: '100 000 kr', image: SubmarinerBlue },
    { id: 5, name: 'Rolex', model: 'Air-King' ,describtion: 'Silver', price: '100 000 kr', image: AirKing },
]

