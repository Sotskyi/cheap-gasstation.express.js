
const express = require("express");
const getGasStations = require("./modules/getGasStations.js");
const getzipCode = require("./modules/getzipCode");
const port =3030;
const bestMatches = require("./modules/bestMatches.js");
const addCoordinates = require("./modules/addCoordinates.js");
let app = express();
app.listen(port)
app.use(express.static("public"));
app.use(express.json());
// app.get("/", (req, res) => {
//   res.sendFile('index.html')
// });
app.post("/", (request, response) => {
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
