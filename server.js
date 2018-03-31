"use strict";
const express  = require("express");
const path     = require("path");
const mongoose = require("mongoose");
const routes   = require(path.join(process.cwd(), "app", "routes", "index.js"));

// Creating environment variables
require("dotenv").config();

// Creating main application object...
const app     = express();

// Connecting to database..
mongoose.connect(process.env.MONGODB);

// Parsing incoming form data
app.use(express.json());
app.use(express.urlencoded({"extended": true}));

// Enable access to general resources folder...
app.use("/public", express.static(path.join(process.cwd(), "public")));

// Enable access to controllers
app.use("/controllers", express.static(path.join(process.cwd(), "app", "controllers")));

// Applying routing logic
routes(app);

// Launch
let port = process.env.PORT || 8080;
app.listen(process.env.PORT, function(err) {
    if (err) throw err;
    console.log("Yeah? " + port);
});