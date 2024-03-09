/* 
GET
DASHBOARD
*/

exports.dashboard = async (req ,res) => {
    const locals = {
        title: "Dashboard",
        description: "This is an Node-Js Notes App"
    }
    res.render('dashboard/index', {
        locals,
        layout: 'layouts/dashboard' // Specify the layout name without the path
    });
}