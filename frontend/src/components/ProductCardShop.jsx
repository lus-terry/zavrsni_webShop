import React from "react";
import {Button} from "semantic-ui-react"
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "../features/cartSlice";



const ProductCardHomePage = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals());
    };

  


  return (
    <div className="m-3 w-full max-w-xs overflow-hidden  bg-white shadow-md" style={{ height: "650px" }} >
          <img
            style={{ height: "400px" , width: "100%"}}
            className="object-cover m-0"
            src={product.image}
            alt={product.name}
          />

          <div style={{ height: "250px" }} className="p-2">
                <div className="h-1/3 mt-1 px-2 razmaknut_text text-center text-lg flex flex-col">
                    {product.name}
                    <div className="  normal_text text-sm">
                    {product.price}€
                    </div>
                </div>

                
                
                <div className="h-1/3  items-center text-center justify-center  pt-1 flex flex-col">
                    <div className="  normal_text text-lg   ">
                        {product.longDesc}
                    </div>
                   
                </div>

                <div className="h-1/3  flex flex-col justify-end items-center">
                    <Button  onClick={() => handleAddToCart(product)} style={{width: '70%'}} >ADD TO CART</Button>
                </div>

          </div>

    
            
        </div>


  );
};

export default ProductCardHomePage;