const express = require('express');
const { createBlog } = require('../controllers/blog');
const { authMiddleware, isAdmin } = require('../middleware/auth');
const router = express.Router()

router.post('/', authMiddleware, isAdmin, createBlog)

module.exports = router;