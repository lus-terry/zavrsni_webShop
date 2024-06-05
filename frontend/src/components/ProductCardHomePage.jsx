import React from "react";
import {Button} from "semantic-ui-react"



const ProductCardHomePage = ({ product }) => {
  


  return (
    <div className="m-3 w-full max-w-xs overflow-hidden  bg-white shadow-md" style={{ height: "600px" }} >
          <img
            style={{ height: "400px" , width: "100%"}}
            className="object-cover m-0"
            src={product.image.url}
            alt={product.name}
          />

          <div style={{ height: "200px" }} className="p-2">
                <div className="h-1/3 mt-1 px-2 razmaknut_text text-center text-lg flex flex-col">
                    {product.name}
                </div>

                
                
                <div className="h-1/3  items-center text-center justify-center  pt-1 flex flex-col">
                    <div className="  normal_text text-lg   ">
                        {product.shortDesc}
                    </div>
                   
                </div>

                <div className="h-1/3  flex flex-col justify-end items-center">
                    <Button  style={{width: '70%'}} >FIND OUT MORE</Button>
                </div>

          </div>

    
            
        </div>


  );
};

export default ProductCardHomePage;