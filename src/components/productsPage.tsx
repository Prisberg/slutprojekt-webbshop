import React from "react";
import Grid from '@mui/material/Grid';
import Product from "./productCard";
import useStyles from './productStyles';

const products = [
    { id: 1, name: 'Rolex', model: 'Submariner' ,describtion: 'Green', price: '100 000 kr', image: 'https://pwrrsrv.com/wp-content/uploads/2018/09/Rolex-Submariner-Green-Dial-Hulk.jpg' }, 
    { id: 1, name: 'Rolex', model: 'Submariner' ,describtion: 'Blue', price: '100 000 kr', image: 'https://www.watchtradingco.com/wp-content/uploads/2020/09/wtc_rolex_submariner_blue_126613LB_sold.jpg' },
    { id: 1, name: 'Rolex', model: 'Air-King' ,describtion: 'Silver', price: '100 000 kr', image: 'https://cdn2.chrono24.com/images/uhren/21467663-0zjha9f7whtsjixe6n0azh7v-ExtraLarge.jpg' },
]


const Products = () => {
    return(
    <main>
        <Grid container justifyContent="center" spacing={4} paddingTop="50px">
            {products.map((product) => (
                <Grid item justifyContent="center" key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;