var express = require('express');
var router = express.Router();
var db = require('../db');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const secret = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c"

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('../views/login.ejs', {});
});

router.post('/', function (req, res, next) {
    let user = req.body.username;
    let redir = req.body.redirect;
    let pwd = req.body.password;
    let isValid = authenticate(user, pwd);
    let cookie;

    if(user == null || pwd == null) {
        res.status(400)
        res.render('../views/userdeferr.ejs', {message: "Bad request - Bad post body"})
    }
    else {
        isValid.then((status) => {
            if (status) {
                let expiration = Math.floor(Date.now() / 1000) + 2 * 60 * 60;
                let payload = {
                    "exp": expiration,
                    "usr": user
                }
                cookie = jwt.sign(payload, secret);
                res.cookie('jwt', cookie, {expires: 0});
            }
    
            if (redir == "") {
                if (status) {
                    res.status(200);
                } else {
                    res.status(401);
                }
                res.render('../views/login.ejs', {})
            } else {
                res.redirect(req.body.redirect);
            }
        })    
    }


});

function authenticate(user, pwd) {
    return db.searchInUsers({ "username": user })
        .then((data) => {
            let res = false;
            if (data == null) res = false;
            else res = bcrypt.compareSync(pwd, data.password);
            return res;
        })
        .catch((err) => { throw err; })
}

module.exports = router;
