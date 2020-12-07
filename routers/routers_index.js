// Comment
// Import dependencies
import express from 'express';
import productRoutes from './product_router';

const router = express.Router();

// Comments
// All routes
router
    .use('/products', productRoutes);

// Comment
// Exporting module
export default router;