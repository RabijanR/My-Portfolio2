var express = require('express');
var router = express.Router();

/* GET main Home page (for "/") */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET Home page (for "/home") */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Project page */
router.get('/project', function(req, res, next) {
  res.render('projects', { title: 'Project' });
});

/* GET Contact page */
router.get('/contactus', function(req, res, next) {
  res.render('contact', { title: 'Contact us' });
});

module.exports = router;
