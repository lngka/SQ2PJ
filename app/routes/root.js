"use strict";
const path = require("path");

module.exports = function(app) {
    app.route("/")
        .get(function(req, res) {
            return res.render("subscription_form");
            // res.status(200).sendFile(path.join(process.cwd(), "app", "views", "index.html"));
        });
}
