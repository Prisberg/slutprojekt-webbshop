import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Product from "./productCard";

const products = [
    { id: 1, name: 'Rolex', model: 'Submariner' ,describtion: 'Green', price: '100 000 kr', image: 'https://pwrrsrv.com/wp-content/uploads/2018/09/Rolex-Submariner-Green-Dial-Hulk.jpg' }, 
    { id: 2, name: 'Rolex', model: 'Submariner' ,describtion: 'Blue', price: '100 000 kr', image: 'https://www.watchtradingco.com/wp-content/uploads/2020/09/wtc_rolex_submariner_blue_126613LB_sold.jpg' },
    { id: 3, name: 'Rolex', model: 'Air-King' ,describtion: 'Silver', price: '100 000 kr', image: 'https://cdn2.chrono24.com/images/uhren/21467663-0zjha9f7whtsjixe6n0azh7v-ExtraLarge.jpg' },
    { id: 4, name: 'Rolex', model: 'Submariner' ,describtion: 'Green', price: '100 000 kr', image: 'https://pwrrsrv.com/wp-content/uploads/2018/09/Rolex-Submariner-Green-Dial-Hulk.jpg' }, 
    { id: 5, name: 'Rolex', model: 'Submariner' ,describtion: 'Blue', price: '100 000 kr', image: 'https://www.watchtradingco.com/wp-content/uploads/2020/09/wtc_rolex_submariner_blue_126613LB_sold.jpg' },
    { id: 6, name: 'Rolex', model: 'Air-King' ,describtion: 'Silver', price: '100 000 kr', image: 'https://cdn2.chrono24.com/images/uhren/21467663-0zjha9f7whtsjixe6n0azh7v-ExtraLarge.jpg' },
]


export default function Products() {

    return(
    <Box sx={{
        display: 'flex',
         flexGrow: 1,
         flexBasis: 0,
         marginBlockStart: '3rem',
         item: '0'
    }}>
        <Grid 
            sx={{
            margin: 'auto',
                }}
            container justifyContent="center" 
            direction="row" spacing={2} 
            paddingTop="50px" 
            paddingBottom="50px"
            >
            {products.map((product) => (
        <Grid 
            sx={{
                display: 'flex',
            }}
            item justifyContent="center" key={product.id} xs={12} sm={6} md={4} xl={3} lg={4}>
                    <Product product={product} />
        </Grid>
            ))}
        </Grid>
    </Box>
    )
}


