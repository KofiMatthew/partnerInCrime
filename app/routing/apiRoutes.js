var fiends = require("../data/fiends");

module.exports = function(app) {

  app.get("/api/fiends", function(req, res) {
    res.json(fiends);
  });

  app.post("/api/fiends", function(req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      fiendDifference: Infinity
    };

    var fiendData = req.body;
    var fiendScores = fiendData.scores;
    var totalDifference;

    for (var i = 0; i < fiends.length; i++) {
      var currentFiend = fiends[i];
      totalDifference = 0;

      console.log(currentFiend.name);

      for (var j = 0; j < currentFiend.scores.length; j++) {
        var currentFiendScore = currentFiend.scores[j];
        var currentUserScore = fiendScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFiendScore));
      }
      
      if (totalDifference <= bestMatch.fiendDifference) {
        bestMatch.name = currentFiend.name;
        bestMatch.photo = currentFiend.photo;
        bestMatch.fiendDifference = totalDifference;
      }
    }
    fiends.push(fiendData);

    res.json(bestMatch);
    console.log(bestMatch);
  });
};
