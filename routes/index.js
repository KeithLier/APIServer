
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var db = require('./mongodb.js');
var async = require('async');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/get', function(req, res) {
  console.log('get -----');
  var query = [{$group:{"_id":"$url","count":{$sum:1}}}];
  db.aggregate('port',query, function(err, result) {
    async.map(result, function(item, callback) {
      var url = item['_id'];
      db.find('port',{"url":url},{},{},0,0, function(err, r) {
        // item['r'] = r;
        var maxTime = 0;
        var totalTime = 0;
        var fail = 0;
        r.forEach(element => {
          var spendTime = element['spendTime'];
          totalTime += spendTime;
          if(spendTime > maxTime) {
            maxTime = spendTime;
          }
          var success = element['success'];
          if(!success) {
            fail++;
          }
        });
        item['maxTime'] = maxTime;
        item['argv'] = totalTime / r.length;
        item['fail'] = (fail / r.length * 100) + '%';
        callback(null,item);
      });
    }, function(err, results){
      console.log(results);
      var data = {
        'total': result.length,
        'rows': result
      }
      return res.json(data);
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
