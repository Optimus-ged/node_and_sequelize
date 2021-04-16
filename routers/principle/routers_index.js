// Import dependencies
import express from 'express';
import productRoutes from '../product_routes';
import userRoutes from '../user_routes';

const router = express.Router();

// All routes
router
  .use("/products", productRoutes)
  .use("/users", userRoutes);

export default router;