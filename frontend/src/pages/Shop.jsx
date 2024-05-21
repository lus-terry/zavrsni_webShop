

import { Button } from "semantic-ui-react";
import ProductCardShop from "../components/ProductCardShop";
import { useGetAllProductsQuery } from "../slices/productsApi";
import { useNavigate } from "react-router-dom";

const  Shop = () => {
  
    const {data, error, isLoading} = useGetAllProductsQuery();
    const navigate = useNavigate();

    return (
    <div className="content_container">
        
        <div className="row_container">
 

            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occured...</p>
            ) : (
                <>
                <div className="flex " > 
                    {data?.map(product => 
                    <ProductCardShop
                    key = {product.id}
                    product = {product}
                    />
                    )}
                </div>
                </>

            )}
        
            <Button style={{width: '20%'}}  onClick={() => navigate("/cart")} >GO TO CART</Button>
          

        </div>
        
    </div>
    );
};
 
export default Shop;