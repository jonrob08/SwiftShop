const Product = require('../models/product')
const asyncHandler = require('express-async-handler')


// Create a New Product
const createProduct = asyncHandler(async(req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.json({
        newProduct,
      });
    } catch (error) {
      throw new Error(error);
    }
})

// Get All Products
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const getProducts = await Product.find();
        res.json(getProducts);
      } catch (error) {
        throw new Error(error);
      }
})

// Get A Product
const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const findProduct = await Product.findById(id)
        res.json(findProduct)
    } catch (error) {
        throw new Error(error)
    }
})

// Update A Product 
const updateProduct = asyncHandler(async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        {
          firstname: req?.body?.firstname,
          lastname: req?.body?.lastname,
          email: req?.body?.email,
          mobile: req?.body?.mobile,
        },
        {
          new: true,
        }
      );
      res.json({
        updatedUser,
      });
    } catch (error) {
      throw new Error(error);
    }
  });



module.exports = { createProduct, getProduct, getAllProducts }