// Import dependencies
import express from "express";
import productCtrl from "../controller/product_controller";
import checkAuth from "../middleware/token";
import productValidation from "../middleware/product_validate";

// declaring the rooter
const router = express.Router();

// All product routers
router
  .get("/all", checkAuth, productCtrl.getProducts)
  .get("/one/:id", checkAuth, productCtrl.getOneProduit)
  .post("/many", checkAuth, productCtrl.addProducts)
  .post(
    "/one",
    checkAuth,
    productValidation.validatedProduct,
    productCtrl.addProduct
  )
  .put(
    "/:id",
    checkAuth,
    productValidation.validatedProduct,
    productCtrl.updateProduct
  )
  .delete("/:id", checkAuth, productCtrl.deleteProduct);

// Export module
export default router;
