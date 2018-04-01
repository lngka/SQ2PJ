"use strict";
/*
* This route handle the admin control panel
*/
const path = require("path");
const Mailer = require(path.join(process.cwd(), "app", "controllers", "mailer.js"));

module.exports = function(app) {
    app.route("/write")
        .get(checkAuthentication, function(req, res, err) {
            res.render("write", {"layout": "coreUI"});
        })
        .post(checkAuthentication, function(req, res, err) {
            const mailer = new Mailer();
            mailer.sendTextTo("nvckhoa@gmail.com", req.body.subject, req.body.text);
        })
}

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect("/login");
    }
}
