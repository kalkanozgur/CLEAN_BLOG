const express = require('express');
const path = require('path');
const ejs = require('ejs')

const app = express();

app.set('view engine', 'ejs')

//MIDDLEWARES
app.use(express.static(path.resolve(__dirname + '/public')));

//ROUTES
app.get('/', (req, res) => {
    res.redirect('index')
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
app.get('/post', (req, res) => {
    res.render('post')
})
const port = 3000;
app.listen(port, () => {
	console.log(`Sunucu ${port} portunda başlatıldı`);
	console.log(`http://127.0.0.1:${port}`);
});
