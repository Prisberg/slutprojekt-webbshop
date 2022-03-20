import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, CardMedia, Typography } from '@mui/material';
import Button from '@mui/material/Button';



const Product = ({ product }: { product: any }) => {

    return (
        <Card sx={{
            minWidth: '20rem',
            minHeight: '33rem',
        }}>
             <Button sx={{
                 height:'20em',
                 width:'100%',
                 display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
             }} >
                <CardMedia sx={{
                height: '100%',
                width: '100%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                objectFit: 'cover',
            }}
                image={product.image}
                title={product.name} />
                        <Typography sx={{
                            color: 'black',
                            borderColor: 'black',
                        }}>
                            More info
                        </Typography>
                    </Button>
            
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '50px'
                }}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '20px',
                        }}>
                        {product.model}
                    </Typography>

                    <Typography>
                        {product.describtion}
                    </Typography>

                </Box>
                <Typography variant="body2" color="textSecondary">{product.price}</Typography>
                <CardActions disableSpacing
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                    <Button sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#5f5f5f',
                            color: '#fff',
                        }
                    }}>
                        Buy now
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default Product;