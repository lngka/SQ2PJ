"use strict";
/*
* This route handle the admin control panel
*/
const path = require("path");

module.exports = function(app) {
    app.route("/write")
        .get(checkAuthentication, function(req, res, err) {
            res.render("write", {"layout": "coreUI"});
        });
}

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect("/login");
    }
}
