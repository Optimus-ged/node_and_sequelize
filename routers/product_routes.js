// Import dependencies
import express from 'express';
import productController from '../controller/product_controller';
import checkAuth from '../middleware/token';
import productvalidation from '../middleware/product_validate';

// declaring the rooter
const router = express.Router();

// All product routers
router
    .get('/', checkAuth, productController.getProducts)
    .get('/:id', checkAuth, productController.getOneProduit)
    .post('/many', checkAuth, productController.addProducts)
    .post('/', checkAuth, productvalidation.validatedProduct, productController.addProduct)
    .put('/:id', checkAuth, productvalidation.validatedProduct, productController.updateProduct)
    .delete('/:id', checkAuth, productController.deleteProduct)

// Export module
export default router;