// Comment
// Import dependencies
import express from 'express';
import productCtrl from '../controller/product_controller';

// Comment
// declaring the rooter
const router = express.Router();

// Comment
// All product routers
router
    .get('/', productCtrl.getProducts)
    .get('/:id', productCtrl.getOneProduit)
    .post('/', productCtrl.addProduct);

export default router;