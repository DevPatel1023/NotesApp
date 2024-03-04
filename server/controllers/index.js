/* 
GET
DASHBOARD
*/

exports.homePage = async (req ,res) => {
    const locals = {
        title: "Dashboard --> Node-Js APP",
        description: "Free Node-Js Notes App"
    }
    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard' // Specify the layout name without the path
    });
}