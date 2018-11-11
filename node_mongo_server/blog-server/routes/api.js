let express = require('express');
let router = express.Router();
let getPostsFor = require('../db.js').getAllPosts;
let searchPosts = require('../db.js').searchInPosts;
let deletePost = require('../db.js').deletePost;
let updatePost = require('../db.js').updatePost;
let insertPost = require('../db.js').insertPost;

/*========================================================================================================================
If a request does not meet our requirements (such as not formatting data in JSON, not including required data, etc.), 
the server must reply with “400 (Bad request)” status code.
========================================================================================================================*/
function isJSON(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        JSON.parse(item);
    } catch (e) {
        return false;
    }
    return true;
}

// Root API path will just respond with all data in the DB (not required by the spec, I just decided)
router.get('/', (req, res, next) => {
    getPostsFor({})
        .then(posts => {
            res.send(posts);
        })
        .catch(e => {
            console.log("error getting all posts in database for root api path");
        })
});

/*========================================================================================================================
C 
Server must insert a *new* blog post with username, postid, title, and body from the request.
The request must include title and body in its body in JSON. 
The created and modified fields of the inserted post should be set to the current time.
If the insertion is successful, the server should reply with “201 (Created)” status code. 
If a blog post with the *same postid by username* already exists in the server, OR If a request does not meet our requirements (such as not formatting data in JSON, not including required data, etc.)
the server should not insert a new post and reply with “400 (Bad request)” status code.
========================================================================================================================*/
router.post('/:username/:postid', (req, res, next) => {
    // request's username and postid are explicitly included in parameters of URL
    // but request must include title and body in its body in JSON. 
    let title = req.body.title;
    let body = req.body.body;
    let user = req.params.username;
    let id = Number(req.params.postid);
    let c = Number(Date.now());   // All dates transmitted should be in milliseconds since the the Unix epoch (Jan 1, 1970 UTC) in number type.
    let m = c;
    let query = { postid: id, username: user, created: c, modified: m, title: title, body: body }
    let queryForExistence = { postid: id, username: user };
    // If the insertion is successful, the server should reply with “201 (Created)” status code
    searchPosts(queryForExistence)
        .then(post => {

            if (post || !isJSON(req.body) || !title || !body || !user || !id) {
                res.status(400);
                if (post) {
                    res.send('400: post already exists')
                }
                else {
                    res.send('400: improper request')
                }
            } else {
                insertPost(query)
                    .then(succ => {
                        res.status(201).send('inserted post');
                    })
                    .catch(err => {
                        res.status(400).send('400: error inserting post');
                    });
            }
        })
        .catch(err => {
            console.log('caught error in searchPosts in api.js');
        });
});

/*========================================================================================================================
R
Respond with all blog posts by username
Returned posts should be included in the body of the response as an array in JSON even if the user has zero or one post.
Each post in the array must have at least five fields, postid, title, body, created, and modified (case sensitive). 
The response status code should be “200 (OK)”.
========================================================================================================================*/
router.get('/:username', (req, res) => {
    getPostsFor({ username: req.params.username })
        .then(posts => {
            res.status(200).send(posts);
        })
        .catch(e => {
            console.log("error getting posts for api.js\n", e);
        });
});

/*========================================================================================================================
R
Server returns the blog post with postid by username
The post should be included in the body of the response in JSON with at least four fields, title, body, created, and modified (case sensitive). 
If not, the response status code should be “404 (Not found)”.
========================================================================================================================*/
router.get('/:username/:postid', (req, res, next) => {
    searchPosts({ username: req.params.username, postid: Number(req.params.postid) })
        .then(post => {
            if (post) {
                console.log("post is ", post);
                res.status(200).send(post);
            }
            else {
                res.status(404).send('404: Could not find post numbered postid for this user');
            }
        })
        .catch(e => {
            console.log("error getting api postid post", e);
        });
});

/*========================================================================================================================
 U
 The request must include title and body in its body in JSON. 
 When the server gets this request, it must update the *existing blog post* with postid by username with the title and body values from the request.
 The modified field should be updated to the current time as well. 
 If the update is successful, the server should reply with “200 (OK)” status code. 

 If there is no blog post with postid by username, 
 OR 
 If a request does not meet our requirements (such as not formatting data in JSON, not including required data, etc.), 
 the server should reply with “400 (Bad request)” status code.
========================================================================================================================*/
router.put('/:username/:postid', (req, res, next) => {
    // request's username and postid are explicitly included in parameters of URL
    // but request must include title and body in its body in JSON. 
    let title = req.body.title;
    let body = req.body.body;
    let user = req.params.username;
    let id = Number(req.params.postid);
    let m = Number(Date.now());
    let queryForExistence = { username: user, postid: id };

    searchPosts(queryForExistence)
        .then(post => {
            if (!post || !isJSON(req.body) || !title || !body || !user || !id) {
                res.status(400);
                if (!post) {
                    res.send('400: Post does not exist')
                }
                else {
                    res.send('400: Bad Request')
                }
            }
            else {
                updatePost(queryForExistence, title, body, m)
                    .then(succ => {
                        res.status(200).send('updated post');
                    })
                    .catch(err => {
                        res.status(400).send('error updating post');
                    })
            }
        })
        .catch(err => {
            console.log('caught error for serachposts in put')
        });
});

/*========================================================================================================================
D
When the server gets this request, the server must delete the existing blog post with postid by username from the database.
If the deletion is successful, the server should reply with “204 (No content)” status code. 
If there is no such post, the server should reply with “400 (Bad request)” status code.
========================================================================================================================*/
router.delete('/:username/:postid', (req, res, next) => {
    let user = req.params.username;
    let id = Number(req.params.postid);
    let queryForExistence = { username: user, postid: id };
    console.log('got to delete function');

    searchPosts(queryForExistence)
        .then(post => {
            if (post) {
                deletePost({ username: user, postid: id })
                    .then(succ => {
                        console.log('deletion successful!', succ);
                        res.status(204).send('204: Deleted post!'); // server reply with 'No content' status code
                    })
                    .catch(err => {
                        res.status(400); // Bad Request status code
                    });
            } else {
                res.status(400).send('400: The post you are trying to delete does not exist')
            }
        })
        .catch(e => {
            console.log('caught error trying to search for posts in delete method api');
        });
});

module.exports = router;