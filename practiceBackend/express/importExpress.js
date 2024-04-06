import express from "express";
const app = express();
app.use((req,res,next)=>{
    console.log("this is midddleware1");
    next();
})
app.get('/',(req,res)=>{
    res.send("Hello World!! in the localhost:3000");
})
app.get('/home',(req,res)=>{
    res.send(`This is HomePage!!`)
})
app.listen(3000)