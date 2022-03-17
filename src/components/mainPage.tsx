import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductCard from "./productCard";

const Content = () => {
    return (
        <Box p={4}>
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <ProductCard/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard/>
            </Grid>
            <Grid item xs={4}>
                <ProductCard/>
            </Grid>
        </Grid>
        </Box>
    );
};

export default Content;
