/* 
    GET Home Page
*/

exports.homePage = async (req, res) => {
    let locals = {
        title: 'Notes App',
        description : 'An Node Js Notes App',
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

/* 
    GET About Page
*/

exports.about = async (req, res) => {
    let locals = {
        title: 'About  - Notes App',
        description : 'An Node Js Notes App',
    }
    res.render('about', locals);
}