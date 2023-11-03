const express = require('express');
const router = express.Router();
const { blogs_details } = require('../controllers/blogsController');

router.get('/:blogid',blogs_details);

module.exports = router;