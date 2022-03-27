import Submariner from "../assets/images/SubmarinerGreen.jpg";
import SubmarinerBlue from "../assets/images/Rolex-submariner.jpeg";
import AirKing from "../assets/images/air-king.jpg";
import Explorer from "../assets/images/Explorer.jpg";
import Datejust from "../assets/images/Datejust.jpg";
import Daydate from "../assets/images/daydate.jpg";

export interface ProductInfo {
    id: number;
    model: string;
    describtion: string;
    price: number;
    image: string;
}

export const products: ProductInfo[] = [
    { id: 0, model: 'Submariner' ,describtion: 'Green', price: 100000, image: Submariner }, 
    { id: 1, model: 'Submariner' ,describtion: 'Blue', price: 150000, image: SubmarinerBlue },
    { id: 2, model: 'Air-King' ,describtion: 'Silver', price: 120000, image: AirKing },
    { id: 3, model: 'Explorer' ,describtion: 'Black', price: 170000, image: Explorer }, 
    { id: 4, model: 'Datejust' ,describtion: 'Green', price: 160000, image: Datejust },
    { id: 5, model: 'Day-Date' ,describtion: 'Gold', price: 175000, image: Daydate },
]

