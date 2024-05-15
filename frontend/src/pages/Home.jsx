
import ProductCardHomePage from "../components/ProductCardHomePage";
import { useGetAllProductsQuery } from "../features/productsApi";

const  Home = () => {
  
    const {data, error, isLoading} = useGetAllProductsQuery();
    return (
    <div className="content_container">
            <div className="row_container">
                <div  style={{height: '700px'}}>

                </div>
            </div>

        <div className="row_container">
            <div className="razmaknut_text">OUR WINES</div>

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

        </div>
        <div className="row_container">
        bla bla

        </div>
        <div className="row_container">
        bla bla

        </div>
        <div className="row_container">
        bla bla

        </div>
        
    </div>
    );
};
 
export default Home;