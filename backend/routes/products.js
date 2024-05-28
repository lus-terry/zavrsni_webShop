const express = require("express")
const cloudinary = require("../utils/cloudinary");
const { Product } = require("../models/product");
const {isAdmin} = require("../middleware/auth")


const router = express.Router();

//CREATE 
router.post("/", isAdmin, async(req, res) => {
    const{name, shortDesc, longDesc, price, image} = req.body;

    try{
        if(image) {
            const uploadRes = await cloudinary.uploader.upload(image, {
                upload_preset: "webShop" //images are saved in folder onlineShop
            })
    
            if(uploadRes) {
                const product = new  Product({
                    name,
                    shortDesc,
                    longDesc,
                    price,
                    image : uploadRes.secure_url
                })
    
                const savedProduct = await product.save();
    
                res.status(200).send(savedProduct);
            }
        }
    } catch(error) {
       console.log(error);
       res.status(500).send(error);
    }
}
);

router.get("/", async(req, res) => {
    try {
        const products = await Product.find()
        res.status(200).send(products)
    } catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
    
})



module.exports = router