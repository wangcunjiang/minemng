var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('customers', { title: '客户汇总' });
});



module.exports = router;
