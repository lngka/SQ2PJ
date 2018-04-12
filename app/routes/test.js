"use strict";
/*
* This route used for test
*/
const SubscriptionsHandler = require("../controllers/subscriptionsHandler.js");

module.exports = function (app) {

    app.route("/test")
        .get(function (req, res) {
            var handler = new SubscriptionsHandler(req, res);

            handler.getAllSubcriptionEmails(function (err, emails) {
                res.setHeader("Content-Type", "application/json");

                if (err) {
                    return res.status(500).send(JSON.stringify(err));
                }

                return res.status(200).send(JSON.stringify(emails));
            });
        });
}
