"use strict";
/*
* This route handle the admin control panel
*/
const path = require("path");

module.exports = function(app) {
    app.route("/admincp")
        .get(function(req, res) {
            res.status(200).sendFile(path.join(process.cwd(), "app", "views", "index.html"));
        });
}
