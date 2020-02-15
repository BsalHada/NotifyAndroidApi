const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Schedule = require('../models/schedule');

router.post('/addSchedule', (req, res, next) => {
    Schedule.create({
        class_name: req.body.class_name,
        course_name: req.body.course_name,
        course_code: req.body.course_code,
        time: req.body.time,
        room_no: req.body.room_no,
        batch: req.body.batch,
        techer_name: req.body.techer_name,
        day: req.body.day
    }).then((event) => {
        res.json({ status: "Schedule Added!" });
    }).catch(next);
});

router.get('/getSchedule', (req, res, next) => {
    Schedule.find()
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

router.delete('/deleteSchedule/:id', function (req, res, next) {
    Schedule.findByIdAndDelete(req.params.id).then(response => {
        console.log("Event detleted of" + req.params.id)
    })
})


router.get('/:id', function (req, res) {
    Schedule.findById(req.params.id)
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

router.get('/:day', function (req, res) {
    Schedule.findById(req.params.day)
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

router.put('/updateSchedule/:id', (req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, {
        class_name: req.body.class_name,
        course_name: req.body.course_name,
        course_code: req.body.course_code,
        time: req.body.time,
        room_no: req.body.room_no,
        batch: req.body.batch,
        techer_name: req.body.techer_name,
        day: req.body.day
    }, { new: true })
});


module.exports = router;