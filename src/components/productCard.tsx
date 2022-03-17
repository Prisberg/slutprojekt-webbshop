import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
       sx={{
            display: 'inline-block', 
            mx: '2px', 
            transform: 'scale(0.8)', 
            boxShadow: 10
        }}
    >
      •
    </Box>
  );

  const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "40vw",
    border: "1px solid",
    padding: "10px",
    boxShadow: "5px 10px red"
  }; 
  
  const card = (
    <Card style={cardStyle}>
        <CardMedia
            component="img"
            image="https://cdn2.chrono24.com/images/uhren/19683451-cmk7g6emjjogkjkkdskxjct2-ExtraLarge.jpg"
            alt="rolex example"
            height="400"
            title="Rolex"
        />
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Rolex
        </Typography>
        <Typography variant="h5" component="div">
          Submariner Green
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          100 000 kr
        </Typography>
        <Typography variant="body2">
          

         
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Buy now</Button>
      </CardActions>
    </Card>
  );
  
  export default function ProductCard() {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    );
  }