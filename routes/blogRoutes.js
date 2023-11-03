const express = require('express');
const router = express.Router();
 

router.get('/:blogid', async (req, res) => {
    await Blog.findById({ _id: req.params.blogid })
        .then(results => {


            res.status(200).render('blog', {
                title: 'Ejs Website',
                page: 'Blogs',
                blog: results
            });

        }).catch(err => console.log(err));

});

module.exports = router;