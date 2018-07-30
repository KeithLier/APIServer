
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
// var ajax = require('fetch')

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
   res.json(data);
   res.end.json(data);
});

// 上传文件接口

// router.use(bodyParser({
//   uploadDir: __dirname + '/../var/uploads',
//   keepExtensions: true,
//   limit: 100 * 1024 * 1024,
//   defer: true
// })).use('/file/public', express.static(__dirname + '/../public'));

// router.post('file/upload', function (req, res) {
//   console.log('req========' + req);
//   req.form.on('progress', function (bytesReceived, bytesExpected) {
 
//   });

//   req.form.on('end', function () {
//       var tmp_path = req.files.file.path;
//       var name = req.files.file.name;

//       console.log("tmp_path: "+ tmp_path);
//       console.log("name: "+name);

//       res.end("success");
//   });
// });


module.exports = router;
