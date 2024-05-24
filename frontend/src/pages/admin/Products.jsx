import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Products = () => {
    const navigate = useNavigate();

    return(
    <>
        <h2>Products</h2>
        <Button onClick={() => navigate("/admin/products/create-product")}>
                    Create new
        </Button>
        <Outlet/>
    </>) 
}
 
export default Products;