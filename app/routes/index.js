/*
*This file covers the application routing logic
*each route is controlled by its own JS file
*/

const path             = require("path");
const root       = require("./root.js");
const subscibe = require("./subscibe.js");
const admincp = require("./admincp.js");

module.exports = function(app) {
    root(app);
    subscibe(app);
    admincp(app);
}
