import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        height: '35vw',
    },
    media: {
        height: '20em',
        width: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '50px'
    },
    cardPrice: {
        fontSize: '20px'
    },
    btnStyle: {
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: '#5f5f5f',
            color: '#fff',
        }
    },
    cardModel: {
        fontSize: '20px',
    },

}));