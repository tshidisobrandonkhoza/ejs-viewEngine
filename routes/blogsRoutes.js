const express = require('express');
const router = express.Router();
const { all_blogs, blogs_post, blogs_delete } = require('../controllers/blogsController');


router.get('/create', (req, res) => {
    res.render('newblog', {
        title: 'Ejs Website',
        page: 'Create Blog',
    });
});

router.get('/', all_blogs);

router.post('/', blogs_post);

router.delete('/:blogid', blogs_delete);


module.exports = router;