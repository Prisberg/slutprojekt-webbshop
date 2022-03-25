import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Product from "./productCard";
import Submariner from "../../assets/images/SubmarinerGreen.jpg";
import SubmarinerBlue from "../../assets/images/Rolex-submariner.jpeg";
import AirKing from "../../assets/images/air-king.jpg";
import { SxProps } from '@mui/material';
import { products } from './mockedProducts';


export default function Products() {

    return (
        <Box sx={boxStyle}>
            <Grid
                container justifyContent="center"
                direction="row" spacing={2}
                paddingTop="50px"
                paddingBottom="50px"
            >
                {products.map((product) => (
                    <Grid
                        sx={{ display: 'flex', }}
                        item justifyContent="center"
                        key={product.id}
                        xs={12} sm={6} md={4} xl={4} lg={4}
                    >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

const boxStyle: SxProps = {
    display: 'flex',
    flexGrow: 1,
    flexBasis: 0,
    paddingTop: { xs: '2.7rem', sm: '4rem' },
    item: '0'
}