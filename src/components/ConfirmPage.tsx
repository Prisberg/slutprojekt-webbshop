import { Card, Typography } from "@mui/material";
import { useUser } from "./ApiContext";
import { useParams } from "react-router-dom";


function ConfirmationPage() {

    const { customerName } = useParams();
    const { isLoading } = useUser();
    let r = Math.round(Math.random() * 999999999999);

    return(

        <div>
        {isLoading ? (
            <span> loading </span> ) : (
        <Card sx={{
            marginTop: '10rem'
        }}>
        
        <Typography>
            Thank you for your order
        </Typography>

        <p>{customerName}</p>

        <p>Order number</p>
        <p>{r}</p>


        </Card>
        )}
        </div>
        
    )
}
export default ConfirmationPage;