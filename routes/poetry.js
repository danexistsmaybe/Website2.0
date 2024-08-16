var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('poetry.ejs');
});

router.get('/viewpoem', function(req, res, next) {
	res.render('viewpoem.ejs');
});

module.exports = router;
