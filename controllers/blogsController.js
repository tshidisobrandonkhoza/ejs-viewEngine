// all_blogs, blog_details, blog_delete, blog_create_post 

const Blog = require('../model/blog');

const all_blogs = async (req, res) => {
    await Blog.find({}).sort({ createdAt: -1 })
        .then(results => {

            res.status(200).render('blogs', {
                title: 'Ejs Website',
                page: 'Blogs',
                blogs: results
            });

        }).catch(err => console.log(err));
}
const blogs_post = async (req, res) => {
    await Blog.create(req.body)
        .then(results => {
            console.log('Added Blog')
            res.status(201).redirect('/blogs');

        }).catch(err => console.log(err));
}

const blogs_delete = async (req, res) => {
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

}

const blogs_details = async (req, res) => {
    await Blog.findById({ _id: req.params.blogid })
        .then(results => {


            res.status(200).render('blog', {
                title: 'Ejs Website',
                page: 'Blogs',
                blog: results
            });

        }).catch(err => {
            res.status(404).render('404', {
                title: 'Ejs Website',
                page: 'Create Blog'
            })
        });
}
module.exports = {
    all_blogs,
    blogs_post,
    blogs_delete,
    blogs_details
}