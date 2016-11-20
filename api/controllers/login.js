'use strict';
var jwt = require('jsonwebtoken');

function login(req, res, next) {
    res.json({
        message: "OK",
        username: "ducntq",
        token: jwt.sign({role: "admin"}, 'something secret')
    });
}