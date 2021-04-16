// Import dependencies
import express from 'express';
import productRoutes from '../product_routes';
import userRoutes from '../user_routes';
import posteRoutes from "../poste_routes";
import agentRoutes from "../agent_routes";

const router = express.Router();

// All routes
router
  .use("/products", productRoutes)
  .use("/users", userRoutes)
  .use("/postes", posteRoutes)
  .use("/agents", agentRoutes);

// Exporting module
export default router;