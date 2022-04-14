import { Box, Button, buttonGroupClasses, Link, SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BadGate() {
    const navigate = useNavigate();

    function refresh() {
        navigate('/')
        window.location.reload();
    }

    return (
        <Box sx={{ marginLeft: '1rem', marginRight: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: "10rem", color: { xs: 'white', sm: 'black' } }}>
            <h3>Something went wrong, there's nothing here!</h3>
            <Button
                sx={ button }
                onClick={() => {
                    refresh();
                }}
            >
                Back to homepage
            </Button>
        </Box>
    )
}

const button: SxProps = {
    marginTop: '2rem',
    maxWidth: '10rem',
    backgroundColor: 'black',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#5f5f5f',
      color: '#fff',
    },
  }