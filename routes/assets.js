var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('assets', { title: '资产汇总' });
});



module.exports = router;
