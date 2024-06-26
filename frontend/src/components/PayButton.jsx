import { useSelector } from "react-redux";
import {url} from "../slices/api";
import axios from "axios";
import { Button } from "semantic-ui-react";


const PayButton = ({cartItems}) => {

    const user = useSelector((state) => state.auth)

    const handleCheckout = () => {
      
        axios.post(`${url}/stripe/create-checkout-session`, {
            cartItems, 
            userId: user._id,

        }).then((res) =>  {
            if(res.data.url) {
                window.location.href = res.data.url;
            }
        }).catch((err) => console.log(err.message));
    };

    return (
        <>
            <Button style={{  width: '100%' }} onClick={() => handleCheckout()}>Check Out</Button>
        </>

    );
}

export default PayButton;