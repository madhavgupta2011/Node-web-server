var express = require( `express`);

var hbs = require('hbs');

var app=express();

hbs.registerPartials(__dirname+ '/views/partials');
app.set('view engine','hbs');

app.use(express.static(__dirname +'/public'));
app.use((req,res,next)=>{
    res.render('maintainance.hbs')
})

app.get(`/`,(req,res)=>{
    res.render('home.hbs',{
        welcomeMessage: "Welcome to your first dynamic page",
        copyright: new Date().getFullYear(),
        pageTitle: "Home Page"
    });
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        welcomeMessage: "Welcome to your Second dynamic page",
        pageTitle: "About Page",
        copyright: new Date().getFullYear()
    })
})
app.get(`/bad`,(req,res)=>{
    res.send({
        errorMessage: "Error handling data"
    })
});

app.listen(3000);