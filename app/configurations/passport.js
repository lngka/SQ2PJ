"use strict";

const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/users.js");
const UsersHandler = require("../controllers/usersHandler.js");


module.exports = function (passport) {
    /*
    * Setting up the authentication strategy
    */
    var options = {
        "usernameField": "username",
        "passwordField": "password"
    };
    passport.use(new LocalStrategy(options, function(username, password, done) {
        User.findOne({"username": username}, function(err, user) {
            if (err)   return done(err, null);
            if (!user) return done(null, false);

            UsersHandler.verifyPassword(username, password, function(err, result) {
                if (err)
                    return done(err, null);
                if (result == false)
                    return done(null, false);
                else
                    return done(null, user);
            });
        });
    }));
    /*
    *done() is a function native to Passport
    *when done(null, user.id) is called. Passport takes this information and
    *passes it to the authenticate function. The information is stored
    *in the user object (req.session.passport.user).
    */
    passport.serializeUser(function (user, done) {
		done(null, user.id);
	});
	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});


};
