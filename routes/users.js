

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var URL = require('url');
var Person = require('./person');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var obj = {
    name: 'keith',
    age: '28'
  }

  res.send(JSON.stringify(obj));
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/info',urlencodedParser, function(req, res, next) {
  console.log(req.body);
  var obj = {
    name: 'keith',
    age: '28'
  }
  res.end(JSON.stringify(obj));
})

module.exports = router;
