var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/c', function(req, res, next) {
  res.render('contactus', { title: 'Details' });
});

module.exports = router;