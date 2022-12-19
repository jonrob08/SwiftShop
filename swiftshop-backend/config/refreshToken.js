const jwt = require('jsonwebtoken')

const generateRefreshToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "1 days" } )
}

module.exports = { generateRefreshToken }