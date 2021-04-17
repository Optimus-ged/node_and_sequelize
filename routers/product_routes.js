// Import dependencies
import express from 'express';
import productController from '../controller/product_controller';
import checkAuth from '../middleware/token';
import productvalidation from '../middleware/product_validate';

// declaring the rooter
const router = express.Router();

// All product routers
router
    .get('/all', checkAuth, productController.getProducts)
    .get('/one/:id', checkAuth, productController.getOneProduit)
    .post('/many', checkAuth, productController.addProducts)
    .post('/one', checkAuth, productvalidation.validatedProduct, productController.addProduct)
    .put('/:id', checkAuth, productvalidation.validatedProduct, productController.updateProduct)
    .delete('/:id', checkAuth, productController.deleteProduct)

// Export module
export default router;