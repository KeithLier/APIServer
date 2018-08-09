var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('./mongodb.js');
var async = require('async');

// parser json
router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));

module.exports = router;
