const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://notify:notify123@cluster0-fhp7z.mongodb.net/notify', {

    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true})
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));