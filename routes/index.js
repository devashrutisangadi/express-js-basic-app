var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.post('/process',function(req,res,next){
  var a = parseInt(req.body.txt1);
  var b = parseInt(req.body.txt2);
  var c = a + b;
  console.log('sum is ' + c)
  res.render('ans',{mya:a,myb:b,myc:c})
})

router.get('/marksheet', function(req, res, next) {
  res.render('marksheet', { title: 'Express' });
});

router.post('/test',function(req,res,next){
  var math = parseInt(req.body.ms1);
  var eng = parseInt(req.body.ms2);
  var dmbs = parseInt(req.body.ms3);
  var oocp = parseInt(req.body.ms4);
  var s = math + eng + dmbs + oocp;
  console.log('sum is ' + s)
  var h=s;
  if(h>320){
  res.render('ans2')}
  else{res.render('ans3',{myh:h})}
})

module.exports = router;
