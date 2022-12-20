const Blog = require("../models/blog");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateDatabaseId");

// Create New Blog
const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// Update Blog
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//Get All Blogs
const getAllBlogs = asyncHandler(async (req, res) => {
    try {
      const allBlogs = await Blog.find();
      res.json(allBlogs);
    } catch (error) {
      throw new Error(error);
    }
})

// Get A Blog
const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getBlog = await Blog.findById(id);
    await Blog.findByIdAndUpdate(
      id,
      {
        // increment views by 1
        $inc: { views: 1 },
      },
      {
        new: true,
      }
    );
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete A Blog
const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const deletedBlog = await Blog.findByIdAndDelete(id);
      res.json(deletedBlog);
    } catch (error) {
      throw new Error(error);
    }
})

module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog };
