import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from './productStyles';



const Product = ( {product} : { product: any}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography className={classes.cardModel}>
                        {product.model}
                    </Typography>
                    
                    <Typography>
                        {product.describtion}
                    </Typography>
        
                </div>
                <Typography variant="body2" color="textSecondary">{product.price}</Typography>
                <CardActions disableSpacing className={classes.cardActions}>
                    <Button className={classes.btnStyle}>
                        Buy now
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default Product;