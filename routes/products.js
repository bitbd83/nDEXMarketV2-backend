//only for reference file , no use in production
const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');

/* GET ALL PRODUCTS */
router.get('/', function (req, res, next) {
    Product.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function (req, res, next) {
    Product.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE PRODUCT */
router.post('/', function (req, res, next) {
    console.log(req.body.prod_name);
    const item = {
        prod_name: req.body.prod_name,
        prod_desc: "yo",
        prod_price: 12
    };
    Product.create(item, function (err, post) {
        if (err) return next(err);

        res.json(post);
    });
});

/* UPDATE PRODUCT */
router.put('/:id', function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE PRODUCT */
router.delete('/:id', function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;