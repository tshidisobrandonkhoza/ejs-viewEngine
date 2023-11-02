
const express = require('express');
const app = express();

//register view engine

app.set('view engine', 'ejs');
// app.set('views', 'otherfolder')


//import temp data

// const BLOG = require('./db/blog');
const BLOG =[];


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Ejs Website'
    });
    // res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Ejs Website'
    });
    // res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/blog', (req, res) => {
    res.render('blog', {
        title: 'Ejs Website',
        blogs: BLOG
    });
    // res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/blog/create', (req, res) => {
    res.render('create', {
        title: 'Ejs Website'
    });
    // res.sendFile('./views/about.html', { root: __dirname });
});

app.use((req, res) => {
    res.render('404', {
        title: 'Ejs Website'
    });
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
});


app.listen(3000);