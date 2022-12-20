const Blog = require('../models/blog')
const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateDatabaseId')

const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body)
        res.json({
            status: "success",
            newBlog
        })
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createBlog }