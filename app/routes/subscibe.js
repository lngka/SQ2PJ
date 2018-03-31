"usetrict";
/*
* this route would be called by the subsciption form
*/
const SubscriptionsHandler = require("../controllers/subscriptionsHandler.js");

module.exports = function (app) {
    var handler = new SubscriptionsHandler();
    app.route("/subscribe")
        .post(handler.newSubscription);
}
