var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mines', { title: '矿场汇总' });
});



module.exports = router;
