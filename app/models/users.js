"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
* Model to store user objects,
* currently represent admins
*/
module.exports = mongoose.model("User", myUserSchema);
var myUserSchema = new Schema({
    "username": {
        "type": String,
        "unique": true,
        "required": true
    },
    "hashedPassword": {
        "type": String,
        "required": true
    },
    "email" : String,
    "role"  : {
        "type": String,
        "required": true,
        "default": "admin",// currently only for admins
        "validate": roleValidator
    }
    }, {
    "timestamps": true
});


function roleValidator(role) {
    // currently only for admins, extendable for other roles
    const availableRoles = [
        "admin", "subscriber"
    ];
    return availableRoles.includes(role);
}
