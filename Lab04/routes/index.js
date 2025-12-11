var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Favorite Singers' });
});

/* Singer pages */
router.get('/daddy', (req, res) => res.render('daddy'));
router.get('/bruno', (req, res) => res.render('bruno'));
router.get('/michael', (req, res) => res.render('michael'));
router.get('/don', (req, res) => res.render('don'));

module.exports = router;


