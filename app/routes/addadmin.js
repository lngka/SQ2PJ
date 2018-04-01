"use strict";
/*
* This route handles registration of admin accounts
*/
const UsersHandler = require("../controllers/usersHandler.js");

module.exports = function(app) {
    const handler = new UsersHandler();
    app.route("/addadmin")
        .get(function (req, res) {
            res.render("admin_form");
        })
        .post(handler.newUser)
}
