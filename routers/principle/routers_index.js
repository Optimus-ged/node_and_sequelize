// Import dependencies
import express from 'express';
import productRouters from '../product_routes';
import userRouters from '../user_routes';

const router = express.Router();

// All routes
router
    .use('/products', productRouters)
    .use('/users', userRouters)

// Exporting module
export default router;