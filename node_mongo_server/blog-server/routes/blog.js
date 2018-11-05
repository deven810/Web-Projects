var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET users listing. */
router.get('/:username', function(req, res, next) {
  res.send("Username: " + typeof(db));
});

router.get('/:username/:postid', function(req, res) { 
  db({"postid":1})
});

module.exports = router;
