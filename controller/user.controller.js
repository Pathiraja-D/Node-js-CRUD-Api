const express = require('express');
const router = express.Router();

const User = require('../model/user.model');

router.get('/', (req, res) => {
    User.find()
    .then(data => res
    .send(data)).catch(err=>console.log(err));
});



router.post('/', (req, res) => {
    User.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(err=>console.log(err))});

module.exports = router;