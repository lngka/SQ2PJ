"use strict";
/*
* contains functions to work with Subscriptions
*/
const Subscriptions = require("../models/subscriptions.js");

module.exports = subscriptionsHandler;
function subscriptionsHandler(req, res) {
    /*
    * Create new subsciption document in database
    * if the RZKennung exists, informs
    */
    this.newSubscription = function(req, res) {
        var rzkennung = req.body.rzkennung;
        var email     = req.body.email;
        var daily     = (req.body.daily) ? true : false;
        var weekly    = (req.body.weekly) ? true : false;

        Subscriptions.findOne({"rzkennung": rzkennung}, function(err, doc) {
            res.setHeader("Content-Type", "application/json");

            if (err) {
                return res.status(500).send(JSON.stringify(err));
            }

            if (doc) {
                return res.status(400).send(JSON.stringify({"Message": "RZKennung exists"}));
            } else {
                var newSub = new Subscriptions();
                newSub.rzkennung = rzkennung;
                newSub.email = email;
                newSub.daily = daily;
                newSub.weekly = weekly;

                newSub.save(function(err) {
                    if (err) {
                        return res.status(500).send(JSON.stringify({"Message": "Error saving new subsciption"}));
                    } else {
                        return res.status(200).send(JSON.stringify({"Message": "Ok"}));
                    }
                });
            }
        });
    };
}
