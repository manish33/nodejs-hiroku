const express= require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+ '/views/partials')

app.set('view engine', 'hbs');
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getfullyear',()=>{
  return new Date().getFullYear()
});

hbs.registerHelper('screamit', (text) => {
  return text.toUpperCase();
});

app.get('/about',(req,res)=>{

res.render('about.hbs',{
  pagetitle: 'welcome to the about page',
});

});

app.get('/',(req,res)=>{

res.send('wow!')

});

app.listen(PORT);
