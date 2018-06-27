const express = require('express');
const app = express();
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname+'/Public'));
app.set('viewengine','hbs');
app.registerPartial(__dirname+'/Views/partial');

app.get('/',(req, res)=>{
  res.render('home.hbs' {
    name: 'home',
    currentyear: new Date().getFullYear()
  });
});

app.listen(PORT);

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    name: "manish",
    currentyear: new Date().getFullYear()
  });
})

app.get('/bad',(req,res)=>{
  res.send("invalid request");
})
