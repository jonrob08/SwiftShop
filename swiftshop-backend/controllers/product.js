const Product = require('../models/product')
const asyncHandler = require('express-async-handler')


const createProduct = asyncHandler(async(req, res) => {
    res.json({
        message: "Hey it's product post route"
    })
})



module.exports = { createProduct }