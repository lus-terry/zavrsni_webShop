import { Button } from "semantic-ui-react";
import ProductCardHomePage from "../components/ProductCardHomePage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const  Home = () => {
  
    const {items: data, status} = useSelector((state) => state.products);
    const navigate = useNavigate();

    const handleNavigate = (link) => {
        navigate(link);
    };

    return (
    <div className="content_container">
        <div className="row_container">
            <h2>ABOUT US</h2>
            <div  style={{height: '700px'}}>

            </div>
        </div>

        <div className="row_container">
            <h2>SHOP OUR WINES</h2>

            {status === "success" ? (
                <>
                <div className="flex " > 
                    {data &&
                    data?.map(product => 
                    <ProductCardHomePage
                    key = {product._id}
                    product = {product}
                    />
                    )}
                </div>
                </>

            ) : status === "pending" ? (
                <p>Loading...</p>
            ) : (
                <p>Unexpected error occured...</p>
            )}
            <Button style={{width: '20%'}} onClick={() => handleNavigate("/shop")} >SEARCH ALL WINES</Button>

        </div>
        <div className="row_container">
            <h2>VISIT</h2>

        </div>
        <div className="row_container">
            <h2>GALLERY</h2>

        </div>
        <div className="row_container">
            <h2>CONTACT</h2>

        </div>
        
    </div>
    );
};
 
export default Home;