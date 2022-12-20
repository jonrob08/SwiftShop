const Pcategory = require('../models/productCategory')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateDatabaseId')

// Create New Product Category
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Pcategory.create(req.body)
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Update A Product Category
const updateCategory = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongoDbId(id)
    try {
        const updatedCategory = await Pcategory.findByIdAndUpdate(id, req.body, {new: true})
        res.json(updatedCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete A Product Category
const deleteCategory = asyncHandler(async (req, res) => {
    const {id} = req.params
    try {
        const deletedCategory = await Pcategory.findByIdAndDelete(id)
        res.json(deletedCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Get Category
const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const getOneCategory = await Pcategory.findById(id)
        res.json(getOneCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Get All Categories
const getAllCategories = asyncHandler(async (req, res) => {
    try {
      const allCategories = await Pcategory.find();
      res.json(allCategories);
    } catch (error) {
      throw new Error(error);
    }
  });


module.exports = { createCategory, updateCategory, deleteCategory, getCategory, getAllCategories }
