const Product = require('../models/product')
const asyncHandler = require('express-async-handler');
const { default: slugify } = require('slugify');

// Create a New Product
const createProduct = asyncHandler(async(req, res) => {
    if (req.body.title){
        req.body.slug = slugify(req.body.title)
    }
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
      const updatedProduct = await Product.findByIdAndUpdate(
        _id,
        {
          title: req?.body?.title,
          slug: req?.body?.slug,
          description: req?.body?.description,
          price: req?.body?.price,
          category: req?.body?.category,
          brand: req?.body?.brand,
          quantity: req?.body?.quantity,
          sold: req?.body?.sold,
          color: req?.body?.color,
        },
        {
          new: true,
        }
      );
      res.json({
        updatedProduct,
      });
    } catch (error) {
      throw new Error(error);
    }
  });



module.exports = { createProduct, getProduct, getAllProducts, updateProduct }