const Product = require("../models/product");
const asyncHandler = require("express-async-handler");
const { default: slugify } = require("slugify");
const { query } = require("express");

// Create a New Product
const createProduct = asyncHandler(async (req, res) => {
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  try {
    const newProduct = await Product.create(req.body);
    res.json({
      newProduct,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// Get All Products
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((element) => delete queryObj[element]);
    let queryStr = JSON.stringify(queryObj);
    // add a dollar sign to the query object in url using regex
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // Sorting
    if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ")
        query = query.sort(sortBy)
    } else {
        query = query.sort("-createdAt")
    }

    // Limiting Fields
    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ")
        query = query.select(fields)
    } else {
        query = query.select('-__v')
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit
    query = query.skip(skip).limit(limit)
    if (req.query.page) {
        const productCount = await Product.countDocuments()
        if (skip >= productCount) throw new Error("This page does not exist")
    }

    console.log(page, limit, skip)

    const getProducts = await query;
    res.json(getProducts);
  } catch (error) {
    throw new Error(error);
  }
});

// Get A Product
const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// Update A Product
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      updatedProduct,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// Delete A Product
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.json({
      deletedProduct,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
