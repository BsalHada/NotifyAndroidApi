const mongoose = require('mongoose');
const notificationSchema = mongoose.Schema({
    title: String,
    desc: String
});
module.exports = mongoose.model('notification', notificationSchema);