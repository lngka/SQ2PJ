"use strict";
/*
* contains functions to work with user objects
*/
const Users  = require("../models/users.js");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

module.exports = usersHandler;
function usersHandler(req, res) {
    /*
    * Create new user object in database
    * if the username exists, informs
    * @param req {Object} from expressJS generated request object
    * @param res {Object} from expressJS generated response object
    */
    this.newUser = function(req, res) {
        var username  = req.body.username;
        var email     = req.body.email;
        var password  = req.body.password;

        Users.findOne({"username": username}, function(err, doc) {
            res.setHeader("Content-Type", "application/json");

            if (err) {
                return res.status(500).send(JSON.stringify(err));
            }

            if (doc) {
                return res.status(400).send(JSON.stringify({"Message": "Username exists"}));
            } else {
                bcrypt.hash(password, SALT_ROUNDS, function(err, hash) {
                    if (err)
                        return res.status(500).send(JSON.stringify({"Message": "Error generating salt to hash the password"}));

                    var newUser = new Users();
                    newUser.username = username;
                    newUser.email = email;
                    newUser.hashedPassword = hash;

                    newUser.save(function(err) {
                        if (err) {
                            return res.status(500).send(JSON.stringify({"Message": "Error saving new user"}));
                        } else {
                            return res.status(200).send(JSON.stringify({"Message": "Ok"}));
                        }
                    });
                });
            }
        });
    };
    /*
    * Check password
    * @param username {String}
    * @param password {String}
    * @param callback {function} will be called with:
    *   @callbackParam err {Error}
    *   @callbackParam result {Boolean}
    */
    this.verifyPassword = function(username, password, callback) {
        Users.findOne({"username": username}, function(err, user) {
            if (err)   return callback(err, null);
            if (!user) return callback(new Error("Username not found!"), null);

            bcrypt.compare(password, user.hashedPassword, function(err, result) {
                if (err) return callback(err, null);
                else return callback(null, result);
            });
        });
    };
}
