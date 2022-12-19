const express = require('express')
const router = express.Router();
const { createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser } = require('../controllers/user')
const { authMiddleware, isAdmin } = require('../middleware/auth')


router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/all-users', getAllUsers)
router.get('/:id', authMiddleware, getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router