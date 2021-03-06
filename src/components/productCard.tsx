import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, CardMedia, Snackbar, SxProps, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import { useContext } from 'react';
import { CartContext } from './Context';
import { Props } from '../mockedData';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Product: React.FC<Props> = ({ productType }) => {

    const { addToCart } = useContext(CartContext);

    const [open, setOpen] = React.useState(false);

   const handleClick = () => {
      setOpen(true);
   };

   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const theme = createTheme({
        typography: {
          fontFamily: [
            'Cormorant SC',
            'serif',
          ].join(','),
        },});

    return (
        <ThemeProvider theme={theme}>
        <Card sx={cardStyling}>
                <Link to={`product-info/${productType.id}`}
                    style={linkStyle}>
                    <Button sx={buttonStyle} >
                        <Typography sx={typographyStyle}>
                            Click for more information
                        </Typography>
                        <CardMedia sx={mediaCardStyle}
                            image={productType.image}
                            />
                    </Button>
                </Link>
             <CardContent>
                <Box sx={boxStyle}>
                    <Typography variant="h5" gutterBottom>
                       {productType.maker}
                    </Typography>
                    <Typography sx={{ fontSize: '20px', }}>
                        {productType.model}
                    </Typography>
                    <Typography>
                        {productType.describtion}
                    </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                    {productType.price} kr
                </Typography>
                <CardActions disableSpacing sx={cardActionStyling}>
                    <Button sx={buyButtonStyle}
                    onClick={() => {handleClick(); addToCart(productType)}}
                    >
                        Buy now
                    </Button>
                </CardActions>
                <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}>
            <Alert onClose={handleClose} severity="success">
               Your watch has been added to your basket!
            </Alert>
         </Snackbar>
                
            </CardContent>
        </Card>
        </ThemeProvider>
    );
};

export default Product;


const linkStyle: CSSProperties = {
    textDecoration: 'none',
    flexGrow: 1,
}
const cardStyling: SxProps = {
    fontFamily: 'Cormorant SC, serif',
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
const mediaCardStyle: SxProps = {
    height: '100%',
    width: '100%',
    display: 'block',
    objectFit: 'cover',
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