import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import {
  braintreePaymentsController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getAllProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productImageController,
  productListController,
  searchProductController,
  similarProductController,
  updateProductController,
} from "../controllers/productController.js";
const router = express.Router();
//routes
router.post(
  "/create-product",
  requireSignin,
  isAdmin,
  formidable(),
  createProductController
);
//get all products
router.get("/getall-products", getAllProductController);
//get single product
router.get("/get-products/:slug", getSingleProductController);
//get image
router.get("/product-image/:pid", productImageController);
//get delete product
router.delete(
  "/delete-product/:pid",
  requireSignin,
  isAdmin,
  deleteProductController
);
//filter Product
router.post("/product-filters", productFiltersController);
//product count
router.get("/product-count", productCountController);
//product per page
router.get("/product-list/:page", productListController);
//update product
router.put(
  "/update-product/:pid",
  requireSignin,
  isAdmin,
  formidable(),
  updateProductController
);
//search product
router.get("/search/:keyword", searchProductController);
//similar products
router.get("/similar-product/:pid/:id", similarProductController);
//category wise product
router.get("/product-category/:slug", productCategoryController);
//payments route
router.get("/braintree/token", braintreeTokenController);
//payments
router.post("/braintree/payment", requireSignin, braintreePaymentsController);

export default router;
