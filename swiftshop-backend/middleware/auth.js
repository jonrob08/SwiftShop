const User = require('../models/user')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        // Split token into array and get the second value
        token = req.headers.authorization.split(" ")[1]
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                const user = await User.findById(decoded?.id)
                req.user = user
                next()
            }
        } catch (error) {
            throw new Error("Not authorized, token has expired. Please login again.")
        }
    } else {
        throw new Error("There is no token in the header")
    }
})

const isAdmin = asyncHandler(async (req, res, next) => {
    
})

module.exports = { authMiddleware };