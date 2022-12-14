const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  refreshTokenHandler,
  logoutUser,
  updatePassword,
  forgotPassword,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controllers/user");
const { authMiddleware, isAdmin } = require("../middleware/auth");

router.get("/get-orders", authMiddleware, getOrders);
router.post("/register", createUser);
router.post('/forgot-password', forgotPassword)
router.put('/reset-password/:token', resetPassword)
router.put("/password", authMiddleware, updatePassword);
router.put("/order/update-order/:id", authMiddleware, updateOrderStatus);
router.post("/cart/apply-coupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.post("/logout", logoutUser);
router.get("/wishlist", authMiddleware, getWishlist);
router.post("/cart", authMiddleware, userCart);
router.get("/cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);

router.get("/all-users", getAllUsers);
router.get("/refresh", refreshTokenHandler);
router.get("/:id", authMiddleware, isAdmin, getUser);

router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
