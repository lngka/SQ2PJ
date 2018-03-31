"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mySubscriptionSchema = new Schema({
    "RZKennung": {
        "type": String,
        "required": true
    },
    "email" : {
        "type": String,
        "required": true
    },
    "daily": {
        "type": Boolean,
        "default": false
    },
    "weekly": {
        "type": Boolean,
        "default": false
    }
    }, {
    "versionKey": false
});

module.exports = mongoose.model("Subscription", mySubscriptionSchema);
