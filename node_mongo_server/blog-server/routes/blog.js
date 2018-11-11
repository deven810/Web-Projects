var express = require('express');
var router = express.Router();
var db = require('../db');
let getPostsInRange = db.getPostsInRange;
let markdown = require('commonmark');
/*
The responses from these two URL patterns must meet the following requirements:

1. All blog posts returned from the two URL patterns should be rendered in HTML from markdown using the commonmark.js module, both title and body.

2. The second URL pattern /blog/:username must return the first 5 posts by username. 
   When there are more posts from the user the returned page must contain a “next” link, which points to a page with the next 5 posts according to the postid by the user. 
   Make sure that the “next” link is implemented as an HTML <a> element with id="next" and href pointing to the URL of the “next page”.

3. The second URL pattern /blog/:username must take an optional query string parameter start=:postid, like /blog/cs144?start=3
   When this optional query string parameter exists, the response must include the next 5 posts by cs144 whose postid is 3 or above.
*/


/* GET users listing. */
router.get('/:username', function (req, res, next) {
	// res.send("Username: " + req.params.username);
	let user = req.params.username;
	let userQuery = { username: user };
	let start = req.query.start ? req.query.start : 0; // if no query strings, req.query.start will hold empty object which I assume is a falsey value
	let range = 5;

	getPostsInRange(userQuery, range, start)
		.then(posts => {
			res.render('../views/index.ejs', {
				postArray: posts,
				user: user,
			});
		})
		.catch(err => {
			console.log('err getting posts in range in blog.js');
		});
});

router.get('/:username/:postid', function (req, res) {

	let foundQuery;

	(async () => {
		try {
			let idFromURL = Number(req.params.postid)
			foundQuery = await db.searchInPosts({ "postid": idFromURL });
			// res.send(foundQuery);
			let mdReader = new markdown.Parser();
			let mdWriter = new markdown.HtmlRenderer();

			let parsedTitle = mdReader.parse(foundQuery.title);
			let parsedBody = mdReader.parse(foundQuery.body);

			res.render('../views/blogPost.ejs', {
				postid: foundQuery.postid,
				created: foundQuery.created,
				modified: foundQuery.modified,
				title: mdWriter.render(parsedTitle),
				body: mdWriter.render(parsedBody),
			});
		} catch (error) {
			console.log(error);
		}
	})();


});

module.exports = router;