
const express = require('express');
const app = express();

const BlogRoutes = require('./routes/blogRoutes');
const BlogsRoutes = require('./routes/blogsRoutes');

//register view engine

app.set('view engine', 'ejs');
// app.set('views', 'otherfolder')




//set up public assests
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());



//connect to database
const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/sample_data_ejs";

mongoose.connect(url)
    .then(results => console.log('connected well to db'))
    .catch(err => console.log(err));



//import temp data
// const BLOG = require('./db/blog');
// const BLOG = [];

//schemas


//routes register

app.use('/blog', BlogRoutes);
app.use('/blogs', BlogsRoutes);

//update blog
// app.put('/blog/:blogid', async (req, res) => {
//     await Blog.findByIdAndUpdate(req.params.blogid, { $set: { title: 'new updated' } }, { new: true })
//         .then(results => {


//             console.log('updated')
//             res.status(200);
//         }).catch(err => console.log(err));

// });

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Ejs Website',
        page: 'Home'
    });
    // res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Ejs Website',
        page: 'About'
    });
});


app.use((req, res) => {
    res.status(404.).render('404', {
        title: 'Ejs Website',
        page: 'Create Blog'
    });
});


app.listen(3000);