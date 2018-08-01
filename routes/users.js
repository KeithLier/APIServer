
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var mongocurd = require('./mongodb');
var curd = new mongocurd('port');

var URL = require('url');
var person = require('./person');

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

router.post('/info', function(req, res, next) {
  console.log(req.body);
  res.end(req.body);
})

router.post('/postUser', function(req, res) {
    // var name = req.param('name');
    // var c = req.param('city');
    // var a = req
    // console.log(name);
    console.log(req.body);
    var user = {
      name: req.param('name'),
      city: req.param('city'),
      age: req.param('age')
    };
    console.log(user);
    curd.add(user, function(data) {
      res.json(data);
    });
    res.end('success');
})

module.exports = router;
