const Color = require('../models/color')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateDatabaseId')

// Create New Color
const createColor = asyncHandler(async (req, res) => {
    try {
        const newColor = await Color.create(req.body)
        res.json(newColor)
    } catch (error) {
        throw new Error(error)
    }
})

// Update A Color
const updateColor = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongoDbId(id)
    try {
        const updatedColor = await Color.findByIdAndUpdate(id, req.body, {new: true})
        res.json(updatedColor)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete A Color
const deleteColor = asyncHandler(async (req, res) => {
    const {id} = req.params
    try {
        const deletedColor = await Color.findByIdAndDelete(id)
        res.json(deletedColor)
    } catch (error) {
        throw new Error(error)
    }
})

// Get Color
const getColor = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const getOneColor = await Color.findById(id)
        res.json(getOneColor)
    } catch (error) {
        throw new Error(error)
    }
})

// Get All Colors
const getAllColors = asyncHandler(async (req, res) => {
    try {
      const allColors = await Color.find();
      res.json(allColors);
    } catch (error) {
      throw new Error(error);
    }
  });


module.exports = { createColor, updateColor, deleteColor, getColor, getAllColors }
