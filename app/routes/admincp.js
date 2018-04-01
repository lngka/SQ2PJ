"use strict";
/*
* This route handles the admin control panel
*/
const path = require("path");

module.exports = function(app) {
    app.route("/admincp")
        .get(checkAuthentication, function(req, res, err) {
            res.render("dashboard", {"layout": "coreUI"});
        });
}

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect("/login");
    }
}
