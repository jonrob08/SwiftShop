const express = require("express")
const { getAllColors, getColor, createColor, updateColor, deleteColor } = require("../controllers/color")
const { authMiddleware, isAdmin } = require("../middleware/auth")
const router = express.Router()

router.get('/:id', authMiddleware, isAdmin, getColor)
router.post('/', authMiddleware, isAdmin, createColor)
router.put('/:id', authMiddleware, isAdmin, updateColor)
router.delete('/:id', authMiddleware, isAdmin, deleteColor)
router.get('/', getAllColors)

module.exports = router
