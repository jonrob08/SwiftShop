const express = require('express')
const { createProduct, getProduct, getAllProducts } = require('../controllers/product')
const router = express.Router()

router.post('/', createProduct)
router.get('/:id', getProduct)
router.get('/', getAllProducts)

module.exports = router