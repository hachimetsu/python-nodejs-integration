var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
    let a = req.body['a'];
    let b = req.body['b'];
    let c = a + b;
    const data = { sum: c };
    console.log(data);
    res.json(data);
});

module.exports = router;
