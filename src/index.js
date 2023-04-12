const express = require('express')
const path = require('path')
const morgan = require('morgan')
const { engine }  = require('express-handlebars');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(express.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

//HTTP logging
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  console.log(req.query.q);
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})