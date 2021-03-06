var express = require( `express`);

var hbs = require('hbs');

var app=express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname+ '/views/partials');
app.set('view engine','hbs');


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

app.listen(port,()=>{
    console.log(`server is up on port ${port}`);
});