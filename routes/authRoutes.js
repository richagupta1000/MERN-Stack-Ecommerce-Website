import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrderController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { requireSignin, isAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();
//routing
//Resiter Post method
router.post("/register", registerController);
//login Post Request
router.post("/login", loginController);
//forgot password
router.post("/forgot-password", forgotPasswordController);
//test
router.get("/test", requireSignin, isAdmin, testController);
//protected user route auth
router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin route auth
router.get("/admin-auth", requireSignin, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//update user Profile
router.put("/user-profile", requireSignin, updateProfileController);
//orders
router.get("/orders", requireSignin, getOrderController);
//all orders
router.get("/all-orders", requireSignin, isAdmin, getAllOrdersController);
//status update
router.put(
  "/order-status/:orderId",
  requireSignin,
  isAdmin,
  orderStatusController
);

export default router;
