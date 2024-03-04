require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 5000 || process.env.PORT;

// Middlewares function that parse the request bodies of incoming requests
// 'unencoded' and 'json' are the two options for the type of data that can be sent in the request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static files
app.use(express.static('public'));


//Template engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

//Handle 404
app.get('*',(req, res) => {
    res.status(404).render('404');
});

// listen on port
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
