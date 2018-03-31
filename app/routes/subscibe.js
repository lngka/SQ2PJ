"usetrict";

module.exports = function (app) {
    app.route("/subscribe")
        .post(function(req, res) {
            console.log(req.body);
            res.send(req.body);
        });
}
