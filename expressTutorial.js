const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.static('./public'));

app.use((req,res,next)=>{
    console.log(`middleware`);
    next();
})

app.get('/profile/:username',(req,res)=>{
    res.render(`index`,{username:req.params.username});
})

app.get('/error',(req,res,next)=>{
    throw Error(`something went wrong`);
})
app.get('/',(req,res,next)=>{
    throw Error(`this is error`);
})

app.use(function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
  })
app.listen(3000); 