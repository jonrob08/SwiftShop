const Bcategory = require('../models/blogCategory')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateDatabaseId')

// Create New Blog Category
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Bcategory.create(req.body)
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Update A Blog Category
const updateCategory = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongoDbId(id)
    try {
        const updatedCategory = await Bcategory.findByIdAndUpdate(id, req.body, {new: true})
        res.json(updatedCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete A Blog Category
const deleteCategory = asyncHandler(async (req, res) => {
    const {id} = req.params
    try {
        const deletedCategory = await Bcategory.findByIdAndDelete(id)
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
        const getOneCategory = await Bcategory.findById(id)
        res.json(getOneCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Get All Categories
const getAllCategories = asyncHandler(async (req, res) => {
    try {
      const allCategories = await Bcategory.find();
      res.json(allCategories);
    } catch (error) {
      throw new Error(error);
    }
  });


module.exports = { createCategory, updateCategory, deleteCategory, getCategory, getAllCategories }
