import {useParams} from "react-router-dom"
import useSummaryData from "../../summary_components/useSummaryData";
import ProductCardView from "../../../../components/ProductCardView";

const ProductDetails = () => {
    const params = useParams();
    const { product, loadingProduct } = useSummaryData();
    console.log("product",product);
    
    return (
        <div className="content_container_blank" > 
        <div className="row_container">
        {loadingProduct ? <p>Loading...</p>
        : <>
                          {product && (
                            <ProductCardView
                                key={product._id}
                                product={product}
                            />
                        )}
                   
        </>}
        </div>
    </div>
    );
}
 
export default ProductDetails;