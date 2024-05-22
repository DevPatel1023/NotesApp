require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT  ;

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Static Files
app.use(express.static('public'));

//Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/main');//default layout
app.set('view engine','ejs');


//Routes 
app.use('/',require('./server/routes/index')); 
//Handle 404
app.use((req,res)=>{
    res.status(404).render('404',{title:'404 Page Not Found'});
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});