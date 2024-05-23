require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = 5000 || process.env.PORT  ;

//Passport initlization
app.use(passport.initialize());
app.use(passport.session());

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//connect to db
connectDB();

//Static Files
app.use(express.static('public'));

//Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/main');//default layout
app.set('view engine','ejs');


//Routes 
app.use('/',require('./server/routes/auth')); 
app.use('/',require('./server/routes/index')); 
app.use('/',require('./server/routes/dashboard')); 
//Handle 404
app.use((req,res)=>{
    res.status(404).render('404',{title:'404 Page Not Found'});
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});