

var express = require('express');
var router = express.Router();

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

router.get('/getPersonInfo', function(req, res, next) {
  var person = new Person();
  var params = URL.parse(req.url, true).query;

  if(params.id == 1) {
    person.name = 'Keith';
    person.city = 'ShangHai';
    person.age = '28';
    person.sex = 'M';
  } else {
    person.name = 'Leon';
    person.city = 'BeiJing';
    person.age = '25';
    person.sex = 'W';
  }
  var response = {
    status: 1,
    data: person
  };
  res.send(JSON.stringify(response));

});

module.exports = router;
