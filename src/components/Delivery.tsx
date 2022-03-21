import { Grid, Card, Typography, } from '@mui/material'

function Delivery () {
    return (
        <Card
        sx={{
            maxWidth: '60rem',
            margin: 'auto',
            marginTop: '15rem',
            paddingBottom: '2rem'
    
          }}
        >
            <Typography sx={{
            textAlign: 'center'
            }}>Shipment
            
            </Typography>
            
            <Grid container spacing={4}>
               <Grid>

                </Grid> 
            </Grid>

        </Card>
    );
};

export default Delivery;