// Comment
// Import dependencies
import express from 'express';
import productController from '../controller/product_controller';
import checkAuth from '../middleware/token';

// Comment
// declaring the rooter
const router = express.Router();

// Comment
// All product routers
router
    .get('/', checkAuth, productController.getProducts)
    .get('/:id', checkAuth, productController.getOneProduit)
    .post('/', checkAuth, productController.addProduct)
    .delete('/:id', checkAuth, productController.deleteProduct)
    .put('/:id', checkAuth, productController.updateProduct)


// Comment
// Export module
export default router;