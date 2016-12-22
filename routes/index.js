var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/account', function(req, res, next){
	res.render('account');
});

router.get('/checkout', function(req, res, next){
	res.render('checkout');
});


router.get('/contact', function(req, res, next){
	res.render('contact');
});

router.get('/products', function(req, res, next){
	res.render('products');
});

router.get('/register', function(req, res, next){
	res.render('register');
});

router.get('/single', function(req, res, next){
	res.render('single');
});

router.get('/typo', function(req, res, next){
	res.render('typo');
});

module.exports = router;
