const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose')


const Post = require('./models/post');

const app = express();

app.set('view engine', 'ejs')

//DB Connection
mongoose
  .connect('mongodb://localhost/cleanblog-test-db')
  .then(() => console.log('DB Connection is done'));


//MIDDLEWARES
app.use(express.static(path.resolve(__dirname + '/public')));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

//ROUTES
app.get('/', async (req, res) => {
    const posts = await Post.find({})
    console.log(posts)
    res.render('index', {posts});
})
app.get('/index', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/add_post', (req, res) => {
    res.render('add_post')
})
app.post('/add_post', async (req, res) => {
    await Post.create(req.body)
    res.redirect('/')
})
app.get('/post', (req, res) => {
    res.render('post')
})
const port = 3000;
app.listen(port, () => {
	console.log(`Sunucu ${port} portunda başlatıldı`);
	console.log(`http://127.0.0.1:${port}`);
});
