const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log("hello from app.use(middleware)-1");
    next();
})
app.use(function(req,res,next){
    console.log("hello from app.use(middleware)-2");
    next();
})
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/home/profile/name', function (req, res) {
    res.send('Home Page')
  })
app.get('/contact', function (req, res) {
    res.send('Contact Details')
})

app.listen(3000)