"use strict";
/*
* This route handle the admin control panel
*/
const path = require("path");
const Mailer = require(path.join(process.cwd(), "app", "controllers", "mailer.js"));
const SubscriptionsHandler = require("../controllers/subscriptionsHandler.js");

module.exports = function(app) {
    app.route("/write")
        .get(checkAuthentication, function(req, res) {

            res.render("write", {"layout": "coreUI"});
        })
        .post(checkAuthentication, function(req, res) {

            const mailer = new Mailer();
            mailer.sendTextTo(req.body.email, req.body.subject, req.body.text);
            res.status(200).send("Message sent");
        })
}

function checkAuthentication(req, res, next){
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect("/login");
    }
}
