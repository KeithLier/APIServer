
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var URL = require('url');
var person = require('./person');
// var mongo = require('./mongodb');

router.get('/', function(req, res, next) {
  var obj = {
    name: 'keith',
    age: '28'
  }
  
  res.send(JSON.stringify(obj));
});

var urlencodedParser = bodyParser.urlencoded({ extended: true })

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/info',multipartMiddleware, function(req, res, next) {
  console.log(req.body);
  // var body = JSON.parse(req.body);
  // console.log(body);
  // // mongo.insert(body);
  // res.end(JSON.stringify(body));
  res.end('successs');
})

module.exports = router;
