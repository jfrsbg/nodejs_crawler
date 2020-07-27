var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares/items.js');

/* List Items */
router.post('/search', middlewares.searchItems, function(req, res){
    console.log(req.body)
    res.send(res.data)
    //res.json(res.data)
});

module.exports = router;