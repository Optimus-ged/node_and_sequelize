// Import dependencies
import express from "express";
import productRoutes from "../product_routes";
import userRoutes from "../user_routes";
import postesRoutes from "../poste_routes";
import agentRoutes from "../agent_routes";
import articleRoutes from "../article_routes";
import photoArtRoutes from "../photo_art_routes";

const router = express.Router();

// All routes
router
  .use("/products", productRoutes)
  .use("/users", userRoutes)
  .use("/postes", postesRoutes)
  .use("/agents", agentRoutes)
  .use("/article", articleRoutes)
  .use("/art_photo", photoArtRoutes);

// Exporting module
export default router;
