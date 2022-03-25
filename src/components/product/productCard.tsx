import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, CardMedia, SxProps, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import { SettingsRemoteTwoTone } from '@mui/icons-material';
import { products } from './mockedProducts';


const Product = ({ product }: { product: any }) => {

    function addToCart() {
        let productId = product.id
        const selectedProduct = products.filter((products) => {
            return products.id === productId
        })
        console.log(selectedProduct)
        /* localStorage.setItem() */
    }
    function moreInformation() {
        console.log(product.id)
        /* localStorage.setItem() */
    }

    return (
        <Card sx={cardStyling}>
            <Link to='product-info'
                style={linkStyle}>
                <Button sx={buttonStyle} onClick={moreInformation}>
                    <Typography sx={typographyStyle}>
                        Click for more information
                    </Typography>
                    <CardMedia sx={mediCardStyle}
                        image={product.image}
                        title={product.name} />
                </Button>
            </Link>
            <CardContent>
                <Box sx={boxStyle}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography sx={{ fontSize: '20px', }}>
                        {product.model}
                    </Typography>
                    <Typography>
                        {product.describtion}
                    </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                    {product.price}
                </Typography>
                <CardActions disableSpacing sx={cardActionStyling}>
                    <Button sx={buyButtonStyle} onClick={addToCart}>
                        Buy now
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default Product;


const linkStyle: CSSProperties = {
    textDecoration: 'none',
    flexGrow: 1,
}
const typographyStyle: CSSProperties = {
    color: 'black',
    borderColor: 'black',
    fontSize: '0.8rem',
}
const buttonStyle: SxProps = {
    height: '23em',
    width: '100%',
    display: 'block',
}
const cardStyling: SxProps = {
    minWidth: '20rem',
    minHeight: '33rem',
}
const cardActionStyling: SxProps = {
    display: 'flex',
    justifyContent: 'flex-end',
}
const buyButtonStyle: SxProps = {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
        backgroundColor: '#5f5f5f',
        color: '#fff',
    }
}
const boxStyle: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '50px'
}
const mediCardStyle: SxProps = {
    height: '100%',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
}