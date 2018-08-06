var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var URL = require('url');
var person = require('./person');

var db = require('./mongodb.js');
var xml2json=require('xml2json');

// parser json
router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', function(req, res, next) {
  var obj = {
    name: 'keith',
    age: '28'
  }
  var where = {name:'peco'};
  var field = {

  }
  db.findOne('port',where,field, function(err, result) {
    res.json(result);
  });
  
  res.send(JSON.stringify(obj));
});


router.post('/info', function(req, res, next) {
  console.log(req.body);

  res.json(req.body);
})

router.post('/postUser', function(req, res) {
    console.log(req.body);
    var user = {
      name: req.body.name,
      city: req.body.city,
      age: req.body.age
    };
    console.log(user);
    db.insertOne('port',user, function(err, result) {
      console.log(result);
      res.json(result);
    });
    res.end('success');
})

router.post('/postApi', function(req, res) {
  console.log(req.headers);
  var datas = req.body.datas;

  console.log(datas);
  db.insertMany('port',datas, function(err, result) {
    console.log(result);
  });
  res.end('success');
})
module.exports = router;
