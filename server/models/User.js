const moongoose = require('mongoose');
const Schema = moongoose.Schema;
const UserSchema = new Schema({
    
});

module.exports = moongoose.model('User', UserSchema);