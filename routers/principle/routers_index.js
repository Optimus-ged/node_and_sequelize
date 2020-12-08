// Comment
// Import dependencies
import express from 'express';
import productRouters from '../product_router';
import userRouters from '../user_routers';

const router = express.Router();

// Comments
// All routes
router
    .use('/products', productRouters)
    .use('/users', userRouters)

// Comment
// Exporting module
export default router;