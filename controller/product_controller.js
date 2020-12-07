// Comment
// Import dependencies
import Product from '../models/products';

// Comment
// The product controller
const productController = {
    // Comment
    // Get-all products controller
    getProducts: async (req, res) => {
        let response = await Product.findAll().then().catch(err => {
            console.log(err);
            res.status(500).json({
                error: {
                    message: err.message
                }
            });
        });
        res.status(200).json({
            status: 200,
            count : response.length,
            products: response
        });
    },

    // Comment
    // Get product by id controller
    getOneProduit: async (req, res) => {
        let id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
        let response = await Product.findOne({
            where: id
        })
            .then().catch(err => {
                console.error(err);
            });
        if (response) {
            return res.status(200).json({
                status: 200,
                product: response
            });
        }
        res.status(401).json({
            error: {
                message: 'product not found'
            }
        });
    },

    // Comment
    // add product
    addProduct : async(req, res)=>{
        let data = {
            name : req.body.name,
            price : isNaN(parseFloat(req.body.price)) ? 0 : parseFloat(req.body.price)
        };
        let response = await Product.create({
            name : data.name,
            price : data.price
        }).then().catch(err => console.error(err));
        if(response){
            return res.status(201).json({
                status : 201,
                message : 'Product Successfully created',
                response : response
            })
        }
        res.status(500).json({
            error :{
                message : 'Not created'
            }
        });
    }
};

export default productController;
