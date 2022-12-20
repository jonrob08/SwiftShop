const Coupon = require('../models/coupon')
const validateMongoDbId = require('../utils/validateDatabaseId')
const asyncHandler = require('express-async-handler')

// Create Coupon
const createCoupon = asyncHandler(async (req, res) => {

    try {
      const newCoupon = await Coupon.create(req.body);
      res.json(newCoupon);
    } catch (error) {
      throw new Error(error);
    }
});

// Update A Coupon
const updateCoupon = asyncHandler(async (req, res) => {
    const {id} = req.params
    validateMongoDbId(id)
    try {
        const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {new: true})
        res.json(updatedCoupon)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete A Coupon
const deleteCoupon = asyncHandler(async (req, res) => {
    const {id} = req.params
    try {
        const deletedCoupon = await Coupon.findByIdAndDelete(id)
        res.json(deletedCoupon)
    } catch (error) {
        throw new Error(error)
    }
})

// Get Coupon
const getCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const getOneCoupon = await Coupon.findById(id)
        res.json(getOneCoupon)
    } catch (error) {
        throw new Error(error)
    }
})

// Get All Coupons
const getAllCoupons = asyncHandler(async (req, res) => {
    try {
      const allCoupons = await Coupon.find();
      res.json(allCoupons);
    } catch (error) {
      throw new Error(error);
    }
  });

  module.exports = { createCoupon, updateCoupon, deleteCoupon, getCoupon, getAllCoupons }