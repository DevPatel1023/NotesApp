/* 
    GET Dashboard Page
*/

exports.dashboard = async (req, res) => {
    let locals = {
        title: 'Dashboard - Notes App',
        description : 'An Node Js Notes App',
    }
    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard'
    });
}