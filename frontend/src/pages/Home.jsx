import { Button } from "semantic-ui-react";
import ProductCardHomePage from "../components/ProductCardHomePage";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useNavigate } from "react-router-dom";

const  Home = () => {
  
    const {data, error, isLoading} = useGetAllProductsQuery();
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

            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occured...</p>
            ) : (
                <>
                <div className="flex " > 
                    {data?.map(product => 
                    <ProductCardHomePage
                    key = {product.id}
                    product = {product}
                    />
                    )}
                </div>
                </>

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