"use strict";
const passport = require("passport");
const path     = require("path");

module.exports = function(app) {
    app.route("/login")
        .get(function (req, res) {
            return res.render("login");
        })
        .post(passport.authenticate("local"), function (req, res) {
            return res.redirect("/admincp");
        })
}
