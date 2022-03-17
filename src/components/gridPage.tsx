import React from 'react'
import {Grid} from '@mui/material'
import ProductCard from './productCard';


const GridLayout = () => {
    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8}>
                <ProductCard/>
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
        </Grid>
    )
};

export default GridLayout;