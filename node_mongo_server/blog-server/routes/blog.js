var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/:username', function (req, res, next) {
  // res.send("Username: " + req.params.username);

  res.render('../views/index.ejs', {
    title: "Welcome to " + req.params.username + "'s blog, bitch!",
  });

});

router.get('/:username/:postid', function (req, res) {

  let foundQuery;

  (async () => {
    try {
      let idFromURL = Number(req.params.postid)
      foundQuery = await db.searchInPosts({ "postid": idFromURL });
      // res.send(foundQuery);

      res.render('../views/blogPost.ejs', {
        postid: foundQuery.postid,
        created: foundQuery.created,
        modified: foundQuery.modified,
        title: foundQuery.title,
        body: foundQuery.body,
      })

    } catch (error) {
      console.log(error);
    }
  })();


});

module.exports = router;
