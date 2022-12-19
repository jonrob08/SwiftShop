const express = require('express')
const { createProduct, getProduct, getAllProducts, updateProduct } = require('../controllers/product')
const router = express.Router()

router.post('/', createProduct)
router.post('/:id', updateProduct)
router.get('/:id', getProduct)
router.get('/', getAllProducts)

module.exports = router