const express = require("express");
const userCtrl = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/register", userCtrl.createUser);
router.post("/forgot-password-token", userCtrl.forgotPasswordToken);

router.put("/reset-password/:token", userCtrl.resetPassword);

router.put("/password", authMiddleware, userCtrl.updatePassword);
router.post("/login", userCtrl.loginUserCtrl);
router.post("/admin-login", userCtrl.loginAdmin);
router.post("/cart", authMiddleware, userCtrl.userCart);
router.post("/cart/applycoupon", authMiddleware, userCtrl.applyCoupon);
router.get("/all-users", userCtrl.getallUser);
router.get("/get-orders", authMiddleware, userCtrl.getOrders);
router.get("/getallorders", authMiddleware, isAdmin, userCtrl.getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, userCtrl.getAllOrders);
router.get("/refresh", userCtrl.handleRefreshToken);
router.get("/logout", userCtrl.logout);
router.get("/wishlist", authMiddleware, userCtrl.getWishlist);
router.get("/cart", authMiddleware, userCtrl.getUserCart);

router.get("/:id", authMiddleware, isAdmin, userCtrl.getaUser);
router.delete("/empty-cart", authMiddleware, userCtrl.emptyCart);
router.delete("/:id", userCtrl.deleteaUser);
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  userCtrl.updateOrderStatus
);
router.put("/edit-user", authMiddleware, userCtrl.updatedUser);
router.put("/save-address", authMiddleware, userCtrl.saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, userCtrl.blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, userCtrl.unblockUser);

module.exports = router;
