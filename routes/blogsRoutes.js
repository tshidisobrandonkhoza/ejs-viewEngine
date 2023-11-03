const express = require('express');
const router = express.Router();
 

const Blog = require('../model/blog');

router.get('/create', (req, res) => {
    res.render('newblog', {
        title: 'Ejs Website',
        page: 'Create Blog',
    });
});

router.get('/', async (req, res) => {

    await Blog.find({}).sort({ createdAt: -1 })
        .then(results => {

            res.status(200).render('blogs', {
                title: 'Ejs Website',
                page: 'Blogs',
                blogs: results
            });

        }).catch(err => console.log(err));

});

router.post('/', async (req, res) => {
    await Blog.create(req.body)
        .then(results => {
            console.log('Added Blog')
            res.status(201).redirect('/blogs');

        }).catch(err => console.log(err));
});

router.delete('/:blogid', async (req, res) => {
    await Blog.findById({ _id: req.params.blogid })
        .then(async results => {
            if (results != null) {
                return Blog.deleteOne(req.params.itemsid).then(result => {
                    console.log(`Deleted`)
                    res.status(200).json({ msg: 'Succesfully Deleted', redirect: '/blogs' });
                }).catch(err => console.log(err));
            } else {
                console.log(`Couldnt find the blog id : ${req.params.id}`)
            }

        }).catch(err => console.log(err));

});


module.exports = router;