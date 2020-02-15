const mongoose = require('mongoose');
const routineSchema = mongoose.Schema({
    class_name: String,
    course_name: String,
    course_code: String,
    time: String,
    room_no: String,
    batch: String,
    techer_name: String,
    day: String
});
module.exports = mongoose.model('routine', routineSchema);