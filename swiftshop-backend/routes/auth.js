const express = require('express')
const router = express.Router();
const { createUser, loginUser, getAllUsers } = require('../controllers/user')


router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/all-users', getAllUsers)


module.exports = router