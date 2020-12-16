// Comment
// Import dependencies
import express from 'express';
import productController from '../controller/product_controller';
import checkAuth from '../middleware/token';
import productvalidation from '../middleware/product_validate';

// Comment
// declaring the rooter
const router = express.Router();

// Comment
// All product routers
router
    .get('/', checkAuth, productController.getProducts)
    .get('/:id', checkAuth, productController.getOneProduit)
    .post('/', checkAuth, productvalidation.validatedProduct, productController.addProduct)
    .put('/:id', checkAuth, productvalidation.validatedProduct, productController.updateProduct)
    .delete('/:id', checkAuth, productController.deleteProduct)


// Comment
// Export module
export default router;