
const express = require("express");
const getGasStations = require("./modules/getGasStations.js");
const getzipCode = require("./modules/getzipCode");

const bestMatches = require("./modules/bestMatches.js");
const addCoordinates = require("./modules/addCoordinates.js");
let app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json());
app.post("/api", (request, response) => {
  let coordinates = request.body;

  let zipcode = getzipCode(coordinates);
  return zipcode
    .then(yourZipCode => {
      return getGasStations(yourZipCode, 11);
    })

    .then(allGasstations => {
      let bestMatchesIn3Miles = bestMatches(allGasstations, 3);

      return addCoordinates(bestMatchesIn3Miles);
    })

    .then(readyToSend => {
      let sameOrderAfterPromises = bestMatches(readyToSend, 3);

      response.json({ bestIn3Miles: sameOrderAfterPromises });
    });
    
});
