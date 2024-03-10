const moongoose = require('mongoose');
moongoose.set('strict', false);// to avoid the warning of strict mode
const connectDB = async() =>{
    try {
        const conn = await moongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);// to check the connection
    } catch (error) {
        console.error(error);
    }
};

module.exports = connectDB;// to use it in server.js