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
} = require("../controllers/user");
const { authMiddleware, isAdmin } = require("../middleware/auth");

router.post("/register", createUser);
router.post('/forgot-password', forgotPassword)
router.put('/reset-password/:token', resetPassword)
router.put("/password", authMiddleware, updatePassword);
router.post("/cart", authMiddleware, userCart);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.post("/logout", logoutUser);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.get("/all-users", getAllUsers);
router.get("/refresh", refreshTokenHandler);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
