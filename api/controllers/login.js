'use strict';
var jwt = require('jsonwebtoken');
var datastore = require('@google-cloud/datastore')({
    apiEndpoint: 'http://localhost:8110',
    projectId: 'pcbuild-144804'
});

function login(req, res, next) {
    res.json({
        message: "OK",
        username: "ducntq",
        token: jwt.sign({role: "admin"}, 'something secret')
    });
}

module.exports = {
    login: login
};