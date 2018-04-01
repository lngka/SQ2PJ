"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mySubscriptionSchema = new Schema({
    "rzkennung": {
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
    "timestamps": true
});

module.exports = mongoose.model("Subscription", mySubscriptionSchema);
