const User = require('../models/user')

const createUser = async (req, res) => {
    const email = req.body.email
    const findUser = await User.findOne({ email: email })
    if (!findUser) {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        res.json({
            msg: "This user already exists",
            success: false,
        })
    }
}

module.exports={createUser}