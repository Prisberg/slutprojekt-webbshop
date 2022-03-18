import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({
    root: {
        minWidth: '20rem',
        minHeight: '33rem',
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