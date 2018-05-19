/*
*This file covers the application routing logic
*each route is controlled by its own JS file
*/
const root        = require("./root.js");
const subscibe    = require("./subscibe.js");
const admincp     = require("./admincp.js");
const addadmin    = require("./addadmin.js");
const login       = require("./login.js");
const write       = require("./write.js");
const writeglobal = require("./writeglobal.js");
const test        = require("./test.js");

module.exports = function(app) {
    root(app);
    subscibe(app);
    admincp(app);
    addadmin(app);//This needs to be commented out for security reason
    login(app);
    write(app);
    writeglobal(app);
    test(app);
}
