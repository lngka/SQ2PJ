"use strict";
const express    = require("express");
const path       = require("path");
const mongoose   = require("mongoose");
const routes     = require(path.join(process.cwd(), "app", "routes", "index.js"));
const handlebars = require("express-handlebars");

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

// Setting up view engine
app.set("view engine", "hbs");
app.set("views", path.join(process.cwd(), "app/views"));//set view folder
app.engine("hbs", handlebars({
                    "extname": ".hbs",
                    "layoutsDir": path.join(process.cwd(), "app/views/layouts"),
                    "defaultLayout": "main"
                  })
);

// Applying routing logic
routes(app);

// Launch
let port = process.env.PORT || 8080;
app.listen(process.env.PORT, function(err) {
    if (err) throw err;
    console.log("Yeah? " + port);
});
