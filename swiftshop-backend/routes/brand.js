const express = require("express")
const { getAllBrands, getBrand, createBrand, updateBrand, deleteBrand } = require("../controllers/brand")
const { authMiddleware, isAdmin } = require("../middleware/auth")
const router = express.Router()

router.get('/', authMiddleware, isAdmin, getAllBrands)
router.get('/:id', authMiddleware, isAdmin, getBrand)
router.post('/', authMiddleware, isAdmin, createBrand)
router.put('/:id', authMiddleware, isAdmin, updateBrand)
router.delete('/:id', authMiddleware, isAdmin, deleteBrand)

module.exports = router
