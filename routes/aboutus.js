var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/a', function(req, res, next) {
  res.render('aboutus', { title: 'Address',desc:'Here are some information about us', address:'Manav Adhikar Bhawan, Block-C, GPO Complex, INA New Delhi - 110023' });
});

module.exports = router;