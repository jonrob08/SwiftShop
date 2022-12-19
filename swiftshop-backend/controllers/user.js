const User = require('../models/user')
const asyncHandler = require('express-async-handler')

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email
    const findUser = await User.findOne({ email: email })
    if (!findUser) {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        throw new Error('User Already Exists')
    }
})

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    // check if user exists
    const foundUser = await User.findOne({ email })
    if (foundUser && await foundUser.isPasswordMatched(password)) {
        res.json(foundUser)
    } else {
        throw new Error('Email or Password is incorrect')
    }
})

module.exports={ createUser, loginUser }