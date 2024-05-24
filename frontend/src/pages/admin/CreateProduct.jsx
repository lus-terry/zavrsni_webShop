import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import {productsCreate} from "../../slices/productsSlice"


const CreateProduct = () => {
    const dispatch = useDispatch();
    //const { createStatus } = useSelector((state) => state.products);

    const [productImg, setProductImg] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [shortDesc, setShortDesc] = useState("");
    const [longDesc, setLongDesc] = useState("");

    console.log(productImg);

    const handleProductImageUpload = (e) =>{
        const file = e.target.files[0];

        console.log(file);

        TransformFile(file);
    };



    const TransformFile = (file) => {

        /*
        Base64 is a method for encoding binary data into ASCII text. 
        In the context of web development, 
        Base64 images refer to images that have been encoded as a Base64 string. 
        This string can be embedded directly into the HTML code 
        of a web page and displayed as an image, 
        without the need for separate image files.
        */
        const reader = new FileReader()

        if(file) {
            reader.readAsDataURL(file);
            //once its completed:
            reader.onloadend = () => {
                setProductImg(reader.result);
            };
        } else {
            setProductImg("")
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(productsCreate({
            name,
            price,
            shortDesc,
            longDesc,
            image:productImg

        }))
    }

    return (
        <div className="row_container">
            <p style={{ fontSize: '22px' }} >Create a product: </p>
        

            <form className="flex flex-col w-full px-20 items-center gap-5 " style={{ height: '750x', width: '1200px' }} onSubmit={handleSubmit}>

                <div className="flex w-full gap-10 items-center">
                
                    <div className="  flex flex-col items-left text-left pl-2 justify-center gap-2 w-1/2"  >
                    
                        <p>name:</p>
                        <input
                            className="input"
                            type="text" 
                            required 
                            placeholder=""
                            onChange={(e) => setName(e.target.value)}
                        
                        />
                        <p>price:</p>
                        <input
                            className="input"
                            type="text" 
                            required 
                            placeholder="€  0.00"
                            onChange={(e) => setPrice(e.target.value)}
                        
                        />
                        <p>short description:</p>
                        <input
                            style={{ height: '100px' }}
                            className="input" 
                            type="text" 
                          
                            placeholder=""
                            onChange={(e) => setShortDesc(e.target.value)}
                        
                        />
                        <p>long description:</p>
                        <input
                            style={{ height: '200px' }}
                            className="input" 
                            type="text" 
                         
                            placeholder=""
                            onChange={(e) => setLongDesc(e.target.value)}
                        
                        />
                        <p>image:</p>
                        <label className="button" style={{  width: '100%' }}>
                            <input
                                type="file" 
                                accept="image/*" 
                                onChange={handleProductImageUpload}
                                style={{ display: 'none' }}
                                required
                            />
                            Choose File
                        </label>
             
                    </div>
               
                        
                        <div className=" flex align-center justify-center border-gray-200 border-2  w-1/2" style={{ height: '400px', width: '400px' }}>
                            {productImg ? (
                            <div >
                                <img   src={productImg} alt="product" className="w-full h-full object-cover" />
                            </div>
                            ) : (
                            <div  className=" justify-center items-center flex flex-col" >
                                Image preview will appear here
                            </div>
                            )}
                        </div>
    

                    
                </div>
               
            
                <div className="items-center">
                <Button type="submit" >
                    Submit
                </Button>
                </div>

            
        
        </form>

     </div>
    

    );
}

export default CreateProduct;

