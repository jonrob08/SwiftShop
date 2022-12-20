const Brand = require('../models/brand')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateDatabaseId')

// Create New Brand
const createBrand = asyncHandler(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body)
        res.json(newBrand)
    } catch (error) {
        throw new Error(error)
    }
})

// Update A Brand
const updateBrand = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongoDbId(id)
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {new: true})
        res.json(updatedBrand)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete A Brand
const deleteBrand = asyncHandler(async (req, res) => {
    const {id} = req.params
    try {
        const deletedBrand = await Brand.findByIdAndDelete(id)
        res.json(deletedBrand)
    } catch (error) {
        throw new Error(error)
    }
})

// Get Brand
const getBrand = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const getOneBrand = await Brand.findById(id)
        res.json(getOneBrand)
    } catch (error) {
        throw new Error(error)
    }
})

// Get All Brands
const getAllBrands = asyncHandler(async (req, res) => {
    try {
      const allBrands = await Brand.find();
      res.json(allBrands);
    } catch (error) {
      throw new Error(error);
    }
  });


module.exports = { createBrand, updateBrand, deleteBrand, getBrand, getAllBrands }
