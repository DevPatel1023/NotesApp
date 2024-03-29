/* 
GET
HOMEPAGE
*/

exports.homePage = async (req ,res) => {
    const locals = {
        title: "Node-Js APP",
        description: "This is an Node-Js Notes App"
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page' // Specify the layout name without the path
    });
}


/*
GET
ABOUT
 */

exports.about = async (req ,res) => {
    const locals = {
        title:"About --> Node-Js APP",
        description : "This is an Node-Js Notes App"
    }
    res.render('about',locals);
}