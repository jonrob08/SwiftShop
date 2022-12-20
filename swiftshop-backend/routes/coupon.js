const express = require("express")
const { getAllCoupons, getCoupon, createCoupon, updateCoupon, deleteCoupon } = require("../controllers/coupon")
const { authMiddleware, isAdmin } = require("../middleware/auth")
const router = express.Router()

router.get('/', authMiddleware, isAdmin, getAllCoupons)
router.get('/:id', authMiddleware, isAdmin, getCoupon)
router.post('/', authMiddleware, isAdmin, createCoupon)
router.put('/:id', authMiddleware, isAdmin, updateCoupon)
router.delete('/:id', authMiddleware, isAdmin, deleteCoupon)

module.exports = router
