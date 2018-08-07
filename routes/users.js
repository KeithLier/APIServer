var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var URL = require('url');
var person = require('./person');

var db = require('./mongodb.js');
var xml2json=require('xml2json');
var querystring = require('querystring');

// parser json
router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/get', function(req, res, next) {
  var query = [{$group:{"_id":"$url","count":{$sum:1}}}];
  db.aggregate('port',query, function(err, result) {
    console.log(result);
    return res.json(result);
  });
});

router.post('/postApi', function(req, res) {
  console.log(req.headers);
  var datas = req.body.datas;

  console.log(datas);
  db.insertMany('port',datas, function(err, result) {
    console.log(result);
    return res.json(result);
  });
});


module.exports = router;
