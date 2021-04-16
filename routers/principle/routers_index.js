// Import dependencies
import express from 'express';
import productRoutes from '../product_routes';
import userRoutes from '../user_routes';
import postesRoutes from "../poste_routes";
import agentRoutes from "../agent_routes";


const router = express.Router();

// All routes
router
  .use("/products", productRoutes)
  .use("/users", userRoutes)
  .use("/postes", postesRoutes)
  .use("/agents", agentRoutes)
  

export default router;