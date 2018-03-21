const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    User
        .find()
        .then(users => {
            res.status(200).json(users);
        });
});

router.get('/api/users/', (req,res) => {
    User
        .find()
        .then(users => {
            res.status(200).json(users);
        });
});

router.get('/:id', (req,res) => {
    User
        .findById(req.params.id)
        .then(users => {
            if(users) {
                res.status(200).json(users)
            } else {
            res.status(404).json(users);
            }
        })
});

router.post('/', (req,res) => {
    var newUser = new User(req.body);
        newUser.save()
        .then(users => {
            res.status(201).json(users);
        });
});

router.put('/:id', (req,res) => {
    // var newUser = new User(req.body);
    // var id = newUser._id
        User.findByIdAndUpdate(req.params.id, {$set:req.body})
        .then(users => {
            res.status(204).json(users);
        });
});

router.delete('/:id', (req,res) => {
    User.findByIdAndRemove(req.params.id)
    .then(users => {
        res.status(200).json(users);
    });
});



module.exports = router;