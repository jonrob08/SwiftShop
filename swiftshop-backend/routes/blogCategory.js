const express = require("express")
const { createCategory, updateCategory, deleteCategory, getCategory, getAllCategories } = require("../controllers/blogCategory")
const { authMiddleware, isAdmin } = require("../middleware/auth")
const router = express.Router()

router.get('/', getAllCategories)
router.get('/:id', authMiddleware, isAdmin, getCategory)
router.post('/', authMiddleware, isAdmin, createCategory)
router.put('/:id', authMiddleware, isAdmin, updateCategory)
router.delete('/:id', authMiddleware, isAdmin, deleteCategory)

module.exports = router
