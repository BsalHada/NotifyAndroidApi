const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Event = require('../models/events');

router.post('/addEvent', (req, res, next) => {
    Event.create({
        event_name: req.body.event_name,
        event_desc: req.body.event_desc,
        image: req.body.image
    }).then((event) => {
        res.json({ status: "Event Added!" });
    }).catch(next);
});

router.get('/getproduct', (req, res, next) => {
    Event.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.delete('/deleteproduct/:id', function (req, res, next) {
    Event.findByIdAndDelete(req.params.id).then(response => {
        console.log("Event detleted of" + req.params.id)
    })
})


router.get('/:id', function (req, res) {
    Event.findById(req.params.id)
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})

router.put('/updateproduct/:id', (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, {
        event_name: req.body.event_name,
        event_desc: req.body.event_desc,
        image: req.body.image
    }, { new: true })
});


module.exports = router;