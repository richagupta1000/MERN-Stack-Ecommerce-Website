import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
import {
  allcategoryController,
  categoryController,
  deletecategoryController,
  singlecategoryController,
  updatecategoryController,
} from "../controllers/categoryCotroller.js";
const router = express.Router();
router.post("/create-category", requireSignin, isAdmin, categoryController);
//update category
router.put(
  "/update-category/:id",
  requireSignin,
  isAdmin,
  updatecategoryController
);
//get all category
router.get("/getall-category", allcategoryController);
//single category
router.get("/single-category/:slug", singlecategoryController);
//delete category
router.delete(
  "/delete-category/:id",
  requireSignin,
  isAdmin,
  deletecategoryController
);

export default router;
