"use strict";
/*
* This route handle the admin control panel
*/
const path = require("path");
const Mailer = require(path.join(process.cwd(), "app", "controllers", "mailer.js"));
const SubscriptionsHandler = require("../controllers/subscriptionsHandler.js");

module.exports = function(app) {
    app.route("/writeglobal")
        .get(checkAuthentication, function(req, res, err) {
            res.render("writeglobal", {"layout": "coreUI"});
        })
        .post(checkAuthentication, function(req, res, err) {
            const mailer = new Mailer();
            const subs_handler = new SubscriptionsHandler(req, res);

            subs_handler.getAllSubcriptionEmails(function(err, emails) {
                if (err) {
                    res.setHeader("Content-Type", "application/json");
                    res.status(500).send(JSON.stringify(err));
                    return;
                } else {
                    
                    emails.forEach(function(email) {
                        mailer.sendHTMLTo(email, req.body.subject, req.body.text);
                    });
                    res.status(200).send("Message sent to all subscriptions");
                    return;
                }
            })
        })
}

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect("/login");
    }
}
