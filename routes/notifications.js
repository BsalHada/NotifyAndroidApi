const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Notification = require('../models/notifications');

router.post('/addNotification', (req, res, next) => {
    Notification.create({
        title: req.body.title,
        desc: req.body.desc
    }).then((event) => {
        res.json({ status: "Notification Added!" });
    }).catch(next);
});

router.get('/getNotification', (req, res, next) => {
    Notification.find()
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
    Notification.findByIdAndDelete(req.params.id).then(response => {
        console.log("Event detleted of" + req.params.id)
    })
})


router.get('/:id', function (req, res) {
    Notification.findById(req.params.id)
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
    Notification.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        desc: req.body.desc
    }, { new: true })
});


module.exports = router;