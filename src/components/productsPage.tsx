import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Product from "./productCard";
import { products } from './mockedData';
import { useLocation } from 'react-router-dom';


export default function Products() {

    return(
    <Box sx={{
        display: 'flex',
         flexGrow: 1,
         flexBasis: 0,
         paddingTop: {xs: '2.7rem', sm: '4rem'},
         item: '0'
    }}>
        <Grid 
            sx={{
                }}
            container justifyContent="center" 
            direction="row" spacing={2} 
            paddingTop="50px" 
            paddingBottom="50px"
            >
            {products.map((productType) => (
        <Grid 
        key={productType.id}
            sx={{
                display: 'flex',
            }}
            item justifyContent="center" xs={12} sm={6} md={4} xl={4} lg={4}>
                    <Product 
                    productType={productType}
                    />

        </Grid>
            ))}
        </Grid>
    </Box>
    )
}