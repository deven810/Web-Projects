var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/:username', function (req, res, next) {
  res.send("Username: " + req.params.username);
});

router.get('/:username/:postid', function (req, res) {

  let foundQuery;

  (async () => {
    try {
      foundQuery = await db.searchInPosts({ "postid": 1 });
      res.send(foundQuery);
      console.log("1");
    } catch (error) {
      console.log(error);
    }
  })();


});

module.exports = router;
