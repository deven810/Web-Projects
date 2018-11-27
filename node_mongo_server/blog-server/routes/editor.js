// let jwt = require('jsonwebtoken');
// let express = require('express');
// let router = express.Router();
// var path = require('path');
// const secret = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c'

// /*========================================================================================================================
// If a request does not meet our requirements (such as not formatting data in JSON, not including required data, etc.), 
// the server must reply with “400 (Bad request)” status code.
// ========================================================================================================================*/
// function isJSON(item) {
//     item = typeof item !== "string"
//         ? JSON.stringify(item)
//         : item;

//     try {
//         JSON.parse(item);
//     } catch (e) {
//         return false;
//     }
//     return true;
// }

// function isValidCookie(cookie) {
//     try {
//         cookie = jwt.verify(cookie.jwt, secret)
//         if (cookie.exp < (Date.now()/1000)) {
//             return false; 
//         } 
//         return true; 
//     }
//     catch (err) {
//         return false;
//     }
// }

// // Root API path will just respond with all data in the DB (not required by the spec, I just decided)
// // router.get('/*', express.static(path.join(__dirname, '/public/editor')));
// router.get('/*', (req, res, next) => {
//     // console.log("fucked")
//     // console.log(req)
//     if(isValidCookie(req.cookies)) {
//         console.log(req.url)
//         res.redirect(req.url)
//     } else {
//         // console.log("no")
//         res.redirect('/login?redirect=/editor/');
//     }
// });
// /*========================================================================================================================
// C 
// Server must insert a *new* blog post with username, postid, title, and body from the request.
// The request must include title and body in its body in JSON. 
// The created and modified fields of the inserted post should be set to the current time.
// If the insertion is successful, the server should reply with “201 (Created)” status code. 
// If a blog post with the *same postid by username* already exists in the server, OR If a request does not meet our requirements (such as not formatting data in JSON, not including required data, etc.)
// the server should not insert a new post and reply with “400 (Bad request)” status code.
// ========================================================================================================================*/
// router.post('/*', (req, res, next) => {
//     if(isValidUser(req.cookies, user)) {
//         res.redirect(req.url)
//     } else {
//         res.redirect('/login?redirect=/editor/');
//     }
// });

// router.put('/*', (req, res, next) => {
//     if(isValidUser(req.cookies, user)) {
//         res.redirect(req.url)
//     } else {
//         res.redirect('/login?redirect=/editor/');
//     }
// });

// /*========================================================================================================================
// D
// When the server gets this request, the server must delete the existing blog post with postid by username from the database.
// If the deletion is successful, the server should reply with “204 (No content)” status code. 
// If there is no such post, the server should reply with “400 (Bad request)” status code.
// ========================================================================================================================*/
// router.delete('/*', (req, res, next) => {
//     if(isValidUser(req.cookies, user)) {
//         res.redirect(req.url)
//     } else {
//         res.redirect('/login?redirect=/editor/');
//     }
// });

// module.exports = router;