const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    event_name: String,
    event_desc: String,
    image: String
});
module.exports = mongoose.model('event', eventSchema);