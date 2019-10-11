const express = require('express');
const router = new express.Router();
const Quote = require('../models/quote');

router.get('/quotes', async (req, res) => {

    Quote.countDocuments().exec(function (err, count) {

        var random = Math.floor(Math.random() * count);

        Quote.findOne().skip(random).exec(
            (err, result) => {
                if (!err) {
                    res.send(result);
                }
            });
    });
})

router.post('/quotes', async (req, res) => {

    const quote = new Quote({
        quote: req.body.quote
    });

    await quote.save((err) => {

        if (!err) {
            res.status(201).send('Added quote to database');
        };
    });
})

module.exports = router