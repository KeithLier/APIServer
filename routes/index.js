var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get', function(req, res, next) {
  var data = {
    'first_name': 'li',
    'last_name': 'liang'
  };
  res.json(data);
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
router.post('/post', urlencodedParser, function(req, res, next){
  // 输出 JSON 格式
  var data = {
       'name':req.body.name,
       'gender':req.body.gender
   };
   console.log('body' + req.body);
  //  response.end(JSON.stringify(data));
   res.json(data);
});


module.exports = router;
