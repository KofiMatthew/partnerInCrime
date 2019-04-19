var fiends = require("../data/fiends");

module.exports = function(app) {

    app.get("/api/fiends", function(req, res) {
        res.json(fiends);
    });

    app.post("/api/fiends", function(req, res){
        fiends.push(req.body);
        res.json(true);
    })
}