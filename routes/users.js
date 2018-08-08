var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./mongodb.js');
var async = require('async');

// parser json
router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/get', function(req, res, next) {
  var query = [{$group:{"_id":"$url","count":{$sum:1}}}];
  db.aggregate('port',query, function(err, result) {
    async.map(result, function(item, callback) {
      var url = item['_id'];
      db.find('port',{"url":url},{},{},0,0, function(err, r) {
        item['r'] = r;
        callback(null,item);
      });
    }, function(err, results){
      return res.json(results);
    });
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
